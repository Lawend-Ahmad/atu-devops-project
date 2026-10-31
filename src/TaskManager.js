'use strict';

class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(title) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
      throw new Error('Task title must be a non-empty string');
    }
    const task = { id: this.nextId++, title: title.trim(), completed: false };
    this.tasks.push(task);
    return task;
  }

  getTasks() {
    return [...this.tasks];
  }

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) throw new Error(`Task with id ${id} not found`);
    task.completed = true;
    return task;
  }

  deleteTask(id) {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) throw new Error(`Task with id ${id} not found`);
    const [removed] = this.tasks.splice(index, 1);
    return removed;
  }

  getPendingTasks() {
    return this.tasks.filter(t => !t.completed);
  }

  getCompletedTasks() {
    return this.tasks.filter(t => t.completed);
  }
}

module.exports = TaskManager;
