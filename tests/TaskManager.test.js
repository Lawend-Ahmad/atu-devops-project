'use strict';

const TaskManager = require('../src/TaskManager');

describe('TaskManager', () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  describe('addTask', () => {
    test('should add a task and return it with an id', () => {
      const task = manager.addTask('Buy groceries');
      expect(task).toEqual({ id: 1, title: 'Buy groceries', completed: false });
    });

    test('should increment id for each new task', () => {
      manager.addTask('Task one');
      const task = manager.addTask('Task two');
      expect(task.id).toBe(2);
    });

    test('should throw when title is empty', () => {
      expect(() => manager.addTask('')).toThrow('Task title must be a non-empty string');
    });

    test('should throw when title is not a string', () => {
      expect(() => manager.addTask(123)).toThrow('Task title must be a non-empty string');
    });

    test('should trim whitespace from title', () => {
      const task = manager.addTask('  Clean room  ');
      expect(task.title).toBe('Clean room');
    });
  });

  describe('getTasks', () => {
    test('should return an empty array when no tasks exist', () => {
      expect(manager.getTasks()).toEqual([]);
    });

    test('should return all added tasks', () => {
      manager.addTask('Task A');
      manager.addTask('Task B');
      expect(manager.getTasks()).toHaveLength(2);
    });

    test('should return a copy, not the internal array', () => {
      manager.addTask('Task A');
      const tasks = manager.getTasks();
      tasks.push({ id: 99, title: 'injected', completed: false });
      expect(manager.getTasks()).toHaveLength(1);
    });
  });

  describe('completeTask', () => {
    test('should mark a task as completed', () => {
      manager.addTask('Read a book');
      const task = manager.completeTask(1);
      expect(task.completed).toBe(true);
    });

    test('should throw when task id does not exist', () => {
      expect(() => manager.completeTask(99)).toThrow('Task with id 99 not found');
    });
  });

  describe('deleteTask', () => {
    test('should remove the task and return it', () => {
      manager.addTask('Go for a run');
      const removed = manager.deleteTask(1);
      expect(removed.title).toBe('Go for a run');
      expect(manager.getTasks()).toHaveLength(0);
    });

    test('should throw when task id does not exist', () => {
      expect(() => manager.deleteTask(99)).toThrow('Task with id 99 not found');
    });
  });

  describe('getPendingTasks', () => {
    test('should return only incomplete tasks', () => {
      manager.addTask('Task A');
      manager.addTask('Task B');
      manager.completeTask(1);
      expect(manager.getPendingTasks()).toHaveLength(1);
      expect(manager.getPendingTasks()[0].title).toBe('Task B');
    });
  });

  describe('getCompletedTasks', () => {
    test('should return only completed tasks', () => {
      manager.addTask('Task A');
      manager.addTask('Task B');
      manager.completeTask(1);
      expect(manager.getCompletedTasks()).toHaveLength(1);
      expect(manager.getCompletedTasks()[0].title).toBe('Task A');
    });
  });
});
