import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Tasks } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) tasks!: Tasks;
  @Output() complete = new EventEmitter<string>;

  onCompleteTask(){
    this.complete.emit(this.tasks.id);
  }

}
