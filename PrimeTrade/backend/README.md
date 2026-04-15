# 🚀 Scalable REST API with Authentication & Role-Based Access

## 📌 Overview

This project is a full-stack application featuring a secure and scalable backend with JWT authentication and role-based access control, along with a basic React frontend for interaction.

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt (password hashing)

### Frontend

* React (Vite)
* Fetch API

---

## 🔐 Features

### Authentication

* User registration with hashed passwords
* Secure login with JWT token
* Token-based authentication for protected routes

### Role-Based Access

* USER and ADMIN roles supported
* Middleware-based authorization

### Task Management (CRUD)

* Create tasks
* Fetch user-specific tasks
* Update tasks
* Delete tasks

### API Features

* RESTful API design
* API versioning (`/api/v1`)
* Error handling middleware
* Input validation

---

## 📂 API Endpoints

### Auth

* POST `/api/v1/auth/register`
* POST `/api/v1/auth/login`

### Tasks (Protected)

* GET `/api/v1/tasks`
* POST `/api/v1/tasks`
* PUT `/api/v1/tasks/:id`
* DELETE `/api/v1/tasks/:id`

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/AnishKer/PrimeTrade
cd project-root
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📮 API Testing

Postman collection included:

* Import `postman_collection.json`
* Login to automatically store JWT
* Use protected routes with token

---

## 🛡 Security Features

* Password hashing using bcrypt
* JWT-based authentication
* Protected routes via middleware
* Input validation

---

## 📈 Scalability Considerations

* Modular folder structure for easy expansion
* API versioning for future upgrades
* Can be extended to microservices architecture
* Can integrate Redis for caching
* Can use load balancers (NGINX)
* Stateless authentication using JWT

---

## 🚀 Future Improvements

* Add refresh tokens
* Implement rate limiting

