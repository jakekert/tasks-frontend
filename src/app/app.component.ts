import { Component, ViewChild } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(TaskListComponent) taskListComponent!: TaskListComponent;  // Added the non-null assertion

  // Method to handle the emitted event when tasks list changes
  onTaskUpdate(task?: Task): void {
    this.taskListComponent.refreshTaskList();  // Refresh the task list
  }
}