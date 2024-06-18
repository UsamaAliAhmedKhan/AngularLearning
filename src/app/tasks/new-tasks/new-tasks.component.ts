import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {

  @Output() cancel = new EventEmitter<void>;
  @Output() add = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }

}
