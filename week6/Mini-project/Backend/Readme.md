
# Employee Management System – Backend

## Tech Stack

* Node.js – Runtime environment
* Express.js – Web framework
* MongoDB + Mongoose – Database & ODM
* jsonwebtoken – Authentication using JWT
* bcryptjs – Password hashing
* dotenv – Environment configuration
* cors – Cross-origin resource sharing
* nodemon – Auto-restart during development

---

# Installation & Setup

```bash
npm install
npm run dev
```

---

# Authentication Routes (`/api/auth`)

| Method | Route       | Description                       |
| ------ | ----------- | --------------------------------- |
| POST   | `/register` | Register a new user               |
| POST   | `/login`    | Login user and generate JWT token |

---

# Employee Routes (`/api/employees`)

| Method | Route  | Description             |
| ------ | ------ | ----------------------- |
| GET    | `/`    | Get all employees       |
| POST   | `/`    | Add a new employee      |
| GET    | `/:id` | Get employee by ID      |
| PUT    | `/:id` | Update employee details |
| DELETE | `/:id` | Delete employee         |

---

# Middleware

### `autMiddleware.js`

* Verifies JWT token
* Protects private routes
* Attaches authenticated user data to request object

### `errorMiddleware.js`

* Handles server errors gracefully
* Sends proper status codes and messages
* Prevents application crashes from unhandled exceptions

---

# Features

* User Registration & Login
* JWT-based Authentication
* Password Encryption using bcrypt
* CRUD Operations for Employees
* Protected Routes
* Error Handling Middleware
* MongoDB Database Integration
* RESTful API Structure

---

