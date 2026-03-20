/*assignment1:
-------------
Task Management System (ToDo App Modules):
Building a task manager like Todoist*/

// validator.js - Input validation
// TODO: Export these validation functions

// 1. Validate task title (not empty, min 3 chars)
let validateTitle = function (title) {
  return title.length >= 3;
};

// 2. Validate priority (must be: low, medium, high)
let priorities = ["low", "High", "medium"];
let validatePriority = function (priority) {
  if (priority === priorities.find((element) => element === priority)) {
    return true;
  }
  return false;
};

// 3. Validate due date (must be future date)
let validateDueDate = function (date) {
  return true;
};
export { validateTitle, validatePriority, validateDueDate };
