# Employee Management System – Backend

## Tech Stack

* Node.js – Runtime environment
* Express.js – Web framework
* MongoDB + Mongoose – Database & ODM
* jsonwebtoken – Authentication
* bcryptjs – Password hashing
* dotenv – Environment configuration
* cors – Cross-origin resource sharing
* nodemon – Development auto-restart

---

# Installation & Setup

```bash id="e8x2wq"
npm install
npm run dev
```

---

# Authentication Routes (`/api/auth`)

| Method | Route       | Description          |
| ------ | ----------- | -------------------- |
| POST   | `/register` | Register new user    |
| POST   | `/login`    | Login user & get JWT |

---

# Employee Routes (`/api/employees`)

| Method | Route  | Description        |
| ------ | ------ | ------------------ |
| GET    | `/`    | Get all employees  |
| POST   | `/`    | Add new employee   |
| GET    | `/:id` | Get employee by ID |
| PUT    | `/:id` | Update employee    |
| DELETE | `/:id` | Delete employee    |

---

# Features

* User Registration & Login
* JWT Authentication
* Password Hashing using bcryptjs
* Employee CRUD Operations
* MongoDB Database Integration
* REST API Architecture
* Environment Variable Configuration
* CORS Enabled Backend
* Automatic Server Restart with nodemon
