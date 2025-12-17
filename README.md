# MongoDB CRUD Application

A simple **CRUD (Create, Read, Update, Delete)** web application built using **Node.js, Express.js, MongoDB, and Mongoose**. This project demonstrates basic backend development concepts and RESTful routing with database integration.

---

## 🚀 Features

* Create new records
* Read/display existing records
* Update records
* Delete records
* MVC folder structure
* Environment variable support

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Template Engine:** EJS
* **Styling:** CSS

---

## 📂 Project Structure

```
DB-PROJECT/
│── app.js
│── package.json
│── package-lock.json
│── .gitignore
│── init/
│   ├── data.js
│   └── index.js
│── models/
│   └── listing.js
│── public/
│   └── css/
│       └── style.css
│── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── edit.ejs
│       └── show.ejs
```

---

## ⚙️ Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/USERNAME/REPO-NAME.git
   ```

2. Navigate to the project folder

   ```bash
   cd DB-PROJECT
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the server

   ```bash
   node app.js
   ```

6. Open browser and visit:

   ```
   http://localhost:3000
   ```

---

## 🧪 Learning Outcomes

* Understanding CRUD operations
* Working with MongoDB and Mongoose
* Express routing and middleware
* MVC architecture basics
* Using Git and GitHub

---

## 📌 Future Improvements

* User authentication
* Input validation
* Better UI/UX
* Deployment on cloud platform

---

## 👨‍💻 Author

**Varun Negi**

---

⭐ If you like this project, don’t forget to star the repository!
