import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {

  @Output() close = new EventEmitter<void>;
  @Input({required:true}) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask({
      date: this.enteredDate,
      summary: this.enteredSummary,
      title: this.enteredTitle
    }, this.userId)
    this.close.emit();
  }

}
