import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-tasks',
  standalone: true,
  imports: [],
  templateUrl: './new-tasks.component.html',
  styleUrl: './new-tasks.component.css'
})
export class NewTasksComponent {

  @Output() cancel = new EventEmitter<void>;

  onCancel(){
    this.cancel.emit();
  }

}
