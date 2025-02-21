# 📚 Introduction
-This is the backend for a Course Selling application. It provides APIs for admins and users to manage and 
 purchase courses. The backend is built using Node.js, Express, MongoDB, and JWT authentication.
## Index

- [About](#about)
- [Usage](#usage)
  - [Installation](#installation)
  - [Commands](#commands)
- [Development](#development)
  - [Development Environment](#development-environment)
  - [File Structure](#file-structure)
  - [Build](#build)  
  - [Development](#development)  
- [FAQ](#faq)
- [Resources](#resources)
- [Credit/Acknowledgment](#creditacknowledgment)
- [License](#license)

## About
This project allows users to browse, preview, and purchase courses, while admins can manage course content.

## Usage
This backend provides API routes for authentication, course management, and purchasing courses.

### Installation
- Steps on how to install this project, to use it.
- Be very detailed here, For example, if you have tools which run on different operating systems, write installation steps for all of them.

```
git clone https://github.com/Alok5code/course-selling-app-backend.git
cd course-selling-app-backend
npm install
```

### Commands
- Start the development server:
```
npm start
```
### Development Environment
```
touch .env
```
Add the following environment variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_ADMIN_PASSWORD=your_admin_secret
JWT_USER_PASSWORD=your_user_secret
```


### File Structure
```
├── routes
│   ├── admin.js
│   ├── user.js
│   └── course.js
├── models
│   ├── User.js
│   ├── Admin.js
│   └── Course.js
├── middleware
│   ├── auth.js
├── index.js
├── package.json
└── README.md
```

### Build
- No build step required, as this is a Node.js backend.

### Development
```
npm install --production
npm start
```
## FAQ
- Q: How do I add a new course?

- A: Use the /admin/course POST endpoint.

## Resources
- Express.js Docs
- MongoDB Docs

## Credit/Acknowledgment
- Alok Gairola

## License
- This project is licensed under the MIT License.
