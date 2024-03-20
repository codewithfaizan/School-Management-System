<h1 align="center" text="charcoal">
    SCHOOL MANAGEMENT SYSTEM
</h1>

## Project Overview

<h4 align="start">
- Streamline school management, class organization, and add students and faculty.<br>
- Seamlessly track attendance, assess performance, and provide feedback. <br>
- Access records, view marks, and communicate effortlessly.
</h4>

<br>

# About

- The School Management System is a web-based application built using the MERN (MongoDB, Express.js,    React.js, Node.js) stack.
- It aims to streamline school management, class organization, and facilitate communication between students, teachers, and administrators.

## Features

<ol>
<li> <b> User Roles: </b> The system supports three user roles: Admin, Teacher, and Student. Each role has specific functionalities and access levels.</li>
<li> <b> Admin Dashboard: </b> Administrators can add new students and teachers, create classes and subjects, manage user accounts, and oversee system settings. </li>
<li> <b> Attendance Tracking: </b> Teachers can easily take attendance for their classes, mark students as present or absent, and generate attendance reports. </li>
<li> <b> Performance Assessment:</b> Teachers can assess students' performance by providing marks and feedback. Students can view their marks and track their progress over time.</li>
<li> <b> Data Visualization:<b/> Students can visualize their performance data through interactive charts and tables, helping them understand their academic performance at a glance.</li>
<li> <b> Communication:</b> Users can communicate effortlessly through the system. Teachers can send messages to students and vice versa, promoting effective communication and collaboration.</li>
</ol>


## Technologies Used

<ul>

<li>Frontend: React.js, Material UI, Redux</li>
<li>Backend: Node.js, Express.js</li>
<li>Database: MongoDB</li>

</ul>

<br>

# Installation

```sh
git clone https://github.com/Yogndrr/MERN-School-Management-System.git
```
Open 2 terminals in separate windows/tabs.

Terminal 1: Setting Up Backend 
```sh
cd server
npm i
npm start
```

Create a file called .env in the backend folder.
Inside it write this :

MONGO_URL = mongodb://127.0.0.1/school

Instead of this link write your database link.

Terminal 2: Setting Up Frontend
```sh
cd client
npm i
npm start
```
Now, navigate to `localhost:3000` in your browser. 
The Backend API will be running at `localhost:5000`.

If this is not working then go to the src > redux > userRelated > userHandle.js

Write this after the import statements :

const REACT_APP_BASE_URL = "http://localhost:5000"

Now replace all process.env.REACT_APP_BASE_URL with REACT_APP_BASE_URL.

The problem here was that the .env file in the frontend was not working for other users while it works for me.
.

<br>

# Deployment
* Render - server side
* Netlify - client side

