# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
Here’s a clean, well-structured README for your frontend project (React Employee Management App):
# Employee Management System (Frontend)
## Overview
This is a React-based frontend application for managing employee data. It allows users to create, view, edit, and delete employee records. The application communicates with a backend API running on `http://localhost:3000/employee-api`.
It is designed using reusable components, React Router for navigation, React Hook Form for form handling, Axios and Fetch for API requests, and state management using Context API and Zustand.
## Features
* Add new employee
* View list of employees
* View single employee details
* Edit employee information
* Delete employee
* Form validation using React Hook Form
* Global state handling using Context API and Zustand
* Navigation using React Router
* Loading and error handling during API calls
## Tech Stack
* React (Frontend Library)
* React Router (Navigation)
* React Hook Form (Form handling)
* Axios (API requests)
* Fetch API (Alternative HTTP requests)
* Zustand (Lightweight state management)
* Context API (Global state sharing)
* Tailwind CSS (Styling)
## Project Structure 
The application is organized into reusable components:
* RootLayout manages the overall layout structure including Header, Footer, and page content area.
* Header and Footer are shared UI components across pages.
* Pages include:
  * Create Employee page (Add new employee form)
  * Edit Employee page (Update existing employee data)
  * Employee page (View single employee details)
  * List page (Display all employees)
## API Integration
The frontend communicates with a backend API hosted locally.
Base URL:
[http://localhost:3000/employee-api]
Endpoints used:
* GET /employees → Fetch all employees
* POST /employee → Create new employee
* PUT /employee/:id → Update employee details
* DELETE /employee/:id → Delete employee
## State Management
### Context API
Used to manage shared counter state across components.
### Zustand
Used for lightweight global counter updates with actions like incrementing values.
## Form Handling
All forms are managed using React Hook Form:
* register → connects inputs to form state
* handleSubmit → handles submission logic
* setValue → pre-fills form fields (used in Edit Employee page)
* formState.errors → handles validation errors 
## Key Functional Flow
### 1. Create Employee
* User fills form
* Data is sent using POST request
* On success → redirected to employee list page
### 2. View Employee
* Employee data is passed using React Router state
* Details are displayed in a simple layout
### 3. Edit Employee
* Existing data is loaded using useLocation()
* Form fields are pre-filled using setValue()
* PUT request updates backend data
* On success → navigate back to list
### 4. Delete Employee
* DELETE request sent using employee ID
* List is refreshed after deletion
## Error Handling
* API errors are caught using try-catch blocks
* Error messages are displayed on UI
* Loading states are shown during API requests
## Navigation Flow
* / → Create Employee
* /list → Employee List
* /employee → View Employee
* /editEmployee → Edit Employee
## How to Run the Project
1. Install dependencies:
npm install
2. Start the development server:
npm run dev
3. Ensure backend server is running at:
## Future Improvements
* Add form validation rules (required fields, email format, etc.)
* Add search and filter for employees
* Add pagination for large datasets
* Improve UI with loading skeletons
* Replace Fetch with consistent Axios usage
* Add authentication (login system)
