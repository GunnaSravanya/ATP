//Main application
// TODO: Import task functions
// import { ... } from './task.js';
import { addTask, getAllTasks, completeTask } from "./task.js";

// Test your module system
// 1. Add some tasks
addTask("Breakfast", "High", "2026-2-27");
addTask("Watching Movie", "low", "2026-3-1");

//Display all tasks
console.log(getAllTasks());

//Complete all tasks
completeTask("Breakfast");

//display all tasks
console.log(getAllTasks());
