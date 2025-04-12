import { TodoList } from './todo.js';

const myTodoList = new TodoList();

console.log('=== TODO LIST APP ===');
console.log('Initializing todo list...');

// Add tasks to the todo list
console.log('\nAdding tasks:');
const task1Id = myTodoList.addTask('Buy groceries', 'Milk, eggs, bread, and vegetables');
console.log(`Added task: Buy groceries (ID: ${task1Id})`);

const task2Id = myTodoList.addTask('Finish project report', 'Complete the quarterly report for the team meeting');
console.log(`Added task: Finish project report (ID: ${task2Id})`);

const task3Id = myTodoList.addTask('Call dentist', 'Schedule annual checkup');
console.log(`Added task: Call dentist (ID: ${task3Id})`);

const task4Id = myTodoList.addTask('Go for a run', '30 minutes in the park');
console.log(`Added task: Go for a run (ID: ${task4Id})`);

// Display all tasks
console.log('\nAll tasks after adding:');
myTodoList.displayTasks();

// Mark some tasks as complete
console.log('\nMarking tasks as complete:');
myTodoList.completeTask(task1Id);
console.log(`Marked task #${task1Id} as complete`);

myTodoList.completeTask(task3Id);
console.log(`Marked task #${task3Id} as complete`);

// Display all tasks after marking some as complete
console.log('\nAll tasks after marking some as complete:');
myTodoList.displayTasks();

// Get and display pending tasks
const pendingTasks = myTodoList.getPendingTasks();
console.log('\nPending tasks:');
console.log(`Found ${pendingTasks.length} pending tasks:`);
pendingTasks.forEach(task => {
  console.log(`- ${task.title}`);
});

// Get and display completed tasks
const completedTasks = myTodoList.getCompletedTasks();
console.log('\nCompleted tasks:');
console.log(`Found ${completedTasks.length} completed tasks:`);
completedTasks.forEach(task => {
  console.log(`- ${task.title}`);
});

// Remove a task
console.log('\nRemoving task:');
myTodoList.removeTask(task2Id);
console.log(`Removed task #${task2Id}`);

// Display final task list
console.log('\nFinal task list:');
myTodoList.displayTasks();

console.log('\nTodo List application completed.');