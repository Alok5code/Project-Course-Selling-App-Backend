📚 Course Selling App Backend
This is the backend for a Course Selling application. It provides APIs for admin and users to manage and purchase courses. The backend is built using Node.js, Express, MongoDB, and JWT authentication.

🚀 Features
✅ User Authentication (Signup, Signin)
✅ Admin Authentication (Signup, Signin)
✅ Course Creation, Update, and Deletion (Admin)
✅ Course Preview (User)
✅ Course Purchase (User)

🛠 Project Setup (Git & VS Code)
1️⃣ Initialize a Git Repository
sh
Copy
Edit
git init
2️⃣ Create a .gitignore file
sh
Copy
Edit
touch .gitignore
Add the following lines to .gitignore to exclude unnecessary files from Git:

bash
Copy
Edit
node_modules/
.env
logs/
3️⃣ Add Files to Git
sh
Copy
Edit
git add .
4️⃣ Commit Your Changes
sh
Copy
Edit
git commit -m "Initial commit: Course Selling App Backend"
5️⃣ Create a GitHub Repository
Go to GitHub and create a new repository. Copy the remote URL.

6️⃣ Add Remote Repository
sh
Copy
Edit
git remote add origin <your-repo-url>
7️⃣ Push Code to GitHub
sh
Copy
Edit
git push -u origin main
🎯 Project Setup (Backend)
1️⃣ Clone the Repository
sh
Copy
Edit
git clone <your-repo-url>
cd Course-selling-app-backend
2️⃣ Install Dependencies
sh
Copy
Edit
npm install
3️⃣ Create a .env File
sh
Copy
Edit
touch .env
Add the following:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_ADMIN_PASSWORD=your_admin_secret
JWT_USER_PASSWORD=your_user_secret
4️⃣ Start the Server
sh
Copy
Edit
npm start
🔥 API Routes
🔹 Admin Routes
Method	Endpoint	Description
POST	/admin/signup	Admin Signup
POST	/admin/signin	Admin Signin
POST	/admin/course	Create a Course
PUT	/admin/course	Update a Course
DELETE	/admin/course/:id	Delete a Course
🔹 User Routes
Method	Endpoint	Description
POST	/user/signup	User Signup
POST	/user/signin	User Signin
GET	/user/purchases	View Purchased Courses
🔹 Course Routes
Method	Endpoint	Description
GET	/course/preview	View All Courses
POST	/course/purchase	Purchase a Course
🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT (jsonwebtoken)
Validation: Zod
Middleware: Express middleware for authentication
🤝 Contributing
Fork the repository
Create a new branch: git checkout -b feature-branch
Commit your changes: git commit -m "Add new feature"
Push to the branch: git push origin feature-branch
Submit a Pull Request
📄 License
This project is licensed under the MIT License.