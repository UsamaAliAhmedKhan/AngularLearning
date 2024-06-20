import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Tasks } from './task.model';
import { CardComponent } from "../../sharedUI/card/card.component";

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent]
})
export class TaskComponent {

  @Input({required: true}) tasks!: Tasks;
  @Output() complete = new EventEmitter<string>;

  onCompleteTask(){
    this.complete.emit(this.tasks.id);
  }

}
