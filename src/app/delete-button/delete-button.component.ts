import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements OnInit {

  @Output() tasksDeleted = new EventEmitter<void>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  clear(event: Event): void {
    this.taskService.clearTasks().subscribe(() => {
      console.log("Tasks Deleted");
      this.tasksDeleted.emit();
    })
  }

}
