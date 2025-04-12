export class TodoList {
    constructor() {
      this.tasks = [];
      this.nextId = 1;
    }
  
    addTask(title, description = '') {
      const newTask = {
        id: this.nextId++,
        title,
        description,
        completed: false,
        createdAt: new Date()
      };
      
      this.tasks.push(newTask);
      return newTask.id;
    }
  
    completeTask(taskId) {
      const task = this.tasks.find(task => task.id === taskId);
      
      if (task) {
        task.completed = true;
        task.completedAt = new Date();
        return true;
      }
      
      return false;
    }
    
    getAllTasks() {
      return [...this.tasks];
    }
    
    getCompletedTasks() {
      return this.tasks.filter(task => task.completed);
    }
    
    getPendingTasks() {
      return this.tasks.filter(task => !task.completed);
    }
    
    removeTask(taskId) {
      const initialLength = this.tasks.length;
      this.tasks = this.tasks.filter(task => task.id !== taskId);
      
      return this.tasks.length !== initialLength;
    }
    
    displayTasks() {
      console.log('\n===== TODO LIST =====');
      
      if (this.tasks.length === 0) {
        console.log('No tasks found.');
        return;
      }
      
      this.tasks.forEach(task => {
        console.log(`[${task.completed ? 'X' : ' '}] #${task.id}: ${task.title}`);
        if (task.description) {
          console.log(`   Description: ${task.description}`);
        }
        console.log(`   Created: ${task.createdAt.toLocaleString()}`);
        if (task.completed && task.completedAt) {
          console.log(`   Completed: ${task.completedAt.toLocaleString()}`);
        }
        console.log('---------------------');
      });
    }
  }