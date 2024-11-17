import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = {
    task: '',
    description: ''
  };

  @Output() taskAdded = new EventEmitter<Task>();  // Create an EventEmitter

  constructor(private taskService: TaskService) { }

  onSubmit(): void {
    this.taskService.addTask(this.task).subscribe(result => {
      console.log('Task created', result);
      this.taskAdded.emit(result);  // Emit the new task to the parent
      this.task = { task: '', description: '' };  // Reset the form
    });
  }
}