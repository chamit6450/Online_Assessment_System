<h1>Online Assessment System</h1>
<h2>Description</h2>
The Online Assessment System is a full-stack web application designed for creating and managing online assessments. It allows users to take quizzes, view their scores, and receive feedback. The application leverages the MERN stack (MongoDB, Express.js, React.js, Node.js) for a robust and scalable solution.
<h2>Features</h2>
- User registration and authentication.<br>
- Dynamic quiz creation and management.<br>
- Real-time score tracking and reporting.<br>
- Secure data handling with JWT authentication.<br>
- Responsive user interface built with React.js.<br>
<h2>Technologies Used</h2>
- **MongoDB**: NoSQL database for storing user data and quiz results.<br>
- **Express.js**: Web framework for Node.js to build RESTful APIs.<br>
- **React.js**: Frontend library for creating an interactive and user-friendly interface.<br>
- **Node.js**: JavaScript runtime for executing server-side code.<br>
- **Tailwind CSS**: For attractive CSS designs.<br>
- **Additional tools**: Node-cron for scheduling tasks, Nodemailer for email notifications.<br>
<h2>Installation</h2><br>
<h3>Prerequisites</h3>
Ensure you have the following installed:<br>
- Node.js (LTS version recommended)<br>
- MongoDB (or a MongoDB Atlas account)<br>
<h3>Setup</h3>
1. **Clone the repository:**<br>
git clone https://github.com/chamit6450/CipherSchool.git <br>

Install dependencies for both the server and client:<br>
For Server:<br>
cd Server <br>
npm install <br>
For Client: <br>
cd ../Client <br>
npm install <br>

Setup .env file in the Server directory and add your environment variables. <br>
For example:<br>
MONGO_URI=mongodb://username:password@host:port/database <br>
JWT_SECRET=your_jwt_secret <br>
EMAIL_USER=your_email@example.com <br>
EMAIL_PASS=your_email_password <br>

<h2>Running the Application</h2>
Start the backend server: <br>
cd Server <br>
node index.js <br>
The server will typically run on http://localhost:3000. <br>
<br>
Start the frontend client: <br>
cd ../Client <br>
npm run dev <br>
The client will typically run on http://localhost:5173. <br>

<h2>Usage</h2>
Frontend: Navigate to http://localhost:5173 to access the user interface where you can take quizzes, view your results. <br>
Backend: The server APIs are accessible at http://localhost:3000.
