const { Router } = require("express");
const { adminModel, courseModel } = require("../db");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
const bodyParser = require("body-parser");
const {z} = require("zod");
const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
const adminRouter = Router();
adminRouter.use(bodyParser.json());

adminRouter.post("/signup", async function (req, res) {
	const { email, password, firstName, lastName } = req.body;
	//validation of admin input
	const requiredBody = z.object({
		email: z.string().min(10).max(50),
		password: z.string().min(3).max(50),
		firstName: z.string().min(2).max(50),
		lastName: z.string().min(2).max(50),
	});
	const parsedDataSuccess = requiredBody.safeParse(adminRouter);
	if (!parsedDataSuccess) {
		res.json({
			message: "Invalid Format",
			error: parsedDataSuccess.error,
		});
		return;
	}
	//now hash the password
	const hashedPassword = await bcrypt.hash(password, 5);
	try {
		await adminModel.create({
			email,
			password:hashedPassword,
			firstName,
			lastName,
		});
		res.json({
			message:"Admin created successfully !"
		})
	} catch (e) {
		res.json({
			error:e
		});
	}
});
adminRouter.post("/signin", async function (req, res) {
	const { email, password } = req.body;
	const admin = await adminModel.findOne({
		email: email,
	});
	if (!admin) {
		return res.json({
			message: "admin is not Signedup !",
		});
	}
	const verifyadmin = await bcrypt.compare(password, admin.password);
	if (!verifyadmin) {
		return res.json({
			message: "Invalid credientials",
		});
	} 
	const token = await jwt.sign(
		{
			id: admin._id.toString(),
		},
		JWT_ADMIN_PASSWORD
	);
	return res.json({
		token: token,
	});
});
adminRouter.post("/course",adminMiddleware, async function (req, res) {
	try{
		const adminId = req.adminId;
	const { title, description, price, imageUrl } = req.body;
	const course = await courseModel.create({
		creatorId: adminId,
		description,
		title,
		imageUrl,
		price,
	});
	res.json({
		message: "Course Created !",
		CourseId: course._id,
	});
	} catch(e) {
		res.json({
			message:"Error occured while creating the course.",
			error:e.message
		})
	}
});
adminRouter.put("/course", adminMiddleware, async function (req, res) {
	const { title, description, price, imageUrl } = req.body;
	const creatorId = req.adminId;
	const courseId = req.body;
	const course = await courseModel.findOne({
		creatorId,
		_id: courseId,
	});
	if (!course) {
		return res.json({
			message: "Course not found",
		});
	} else {
		try {
			await courseModel.findByIdAndUpdate(courseId, {
				title,
				description,
				price,
				imageUrl,
			});
			res.json({
				message: "Update successful !",
			});
		} catch (e) {
			res.json({
				error: "An error occurred while updating the course",
			});
		}
	}
});
adminRouter.get("/course/bulk", adminMiddleware, function (req, res) {
	const courses = courseModel.find({});
	res.json({
		courses,
	});
});
module.exports = {
	adminRouter: adminRouter,
};
