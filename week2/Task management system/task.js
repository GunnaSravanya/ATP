/* ii. task.js - Task operations */

import {
  validateTitle,
  validatePriority,
  validateDueDate,
} from "./validate.js";

const tasks = [];

// 1. Add new task
let addTask = function (title, priority, dueDate) {
  if (
    validateTitle(title) &&
    validatePriority(priority) &&
    validateDueDate(dueDate)
  ) {
    let obj = {};
    obj.title = title;
    obj.priority = priority;
    obj.dueDate = dueDate;
    obj.completed = false; // added completed property

    tasks.push(obj);

    return "Task added successfully";
  } else {
    return "The task is not added";
  }
};

// 2. Get all tasks
let getAllTasks = function () {
  return tasks; // return instead of console.log
};

// 3. Mark task as complete
let completeTask = function (title) {
  let task = tasks.find((element) => element.title === title);

  if (task) {
    task.completed = true;
    return true;
  }

  return false;
};

export { addTask, getAllTasks, completeTask };
