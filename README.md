### Trackr- Project Manager 
(Inspired by Jira)
![1738799164033](image/README/1738799164033.png)
![1738799234322](image/README/1738799234322.png)

<div>
  <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logo=react&logoColor=61DAFB&color=000000" alt="React" />
  <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node-dot-js&logoColor=339933&color=000000" alt="Node.js" />
  <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logo=express&logoColor=000000&color=000000" alt="Express" />
  <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logo=mongodb&logoColor=white&color=47A248" alt="MongoDB" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=06B6D4" alt="TailwindCSS" />
</div>

<h3 align="center">Trackr – Project Manager</h3>

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets](#code-snippets)

## 🤖 Introduction

**Trackr – Project Manager** is a robust, full-stack project management application designed to help teams efficiently organize and track their work. With an intuitive user interface and powerful backend support, Trackr offers tools for creating projects, assigning tasks, monitoring progress, and streamlining team collaboration—all in one central platform.

Whether you’re managing a small team or coordinating large-scale projects, Trackr provides real-time updates, detailed dashboards, and secure user authentication to keep everyone on track.

## ⚙️ Tech Stack

- **Frontend:** React, TailwindCSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Other Tools:** JWT for Authentication, Socket.io for Real-Time Updates (optional)

## 🔋 Features

- **User Authentication:** Secure registration, login, and role-based access control.  
- **Project & Task Management:** Create, update, and delete projects and tasks with deadlines and priority settings.  
- **Team Collaboration:** Assign tasks to team members and track progress with real-time notifications.  
- **Dashboard & Analytics:** Visual dashboards to monitor project status, upcoming deadlines, and team performance.  
- **Responsive Design:** Fully responsive UI for seamless use on desktops, tablets, and mobile devices.

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Cloning the Repository

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/Ayush110103/Trackr-Project_Manager.git
cd Trackr-Project_Manager

Installation
Install the project dependencies:

bash
Copy
npm install
# or, if you use Yarn:
# yarn install
Running the Project
Start the development server:

bash
Copy
npm run dev
# or, with Yarn:
# yarn dev
Open your browser and navigate to http://localhost:3000 to see the project in action.


🕸️ Code Snippets
Below are a few example snippets that highlight some core functionalities of Trackr.

Sample: Express Server Setup
javascript
Copy
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
Sample: React Component for Project List
jsx
Copy
// components/ProjectList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project._id} className="p-2 border-b">
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;







### Make sure to create a `.env` file with following variables -

DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
