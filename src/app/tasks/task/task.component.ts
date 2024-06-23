import { Component, inject, Input } from '@angular/core';
import { type Tasks } from './task.model';
import { CardComponent } from "../../sharedUI/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
    selector: 'app-task',
    standalone: true,
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',
    imports: [CardComponent, DatePipe]
})
export class TaskComponent {

  @Input({required: true}) tasks!: Tasks;

  private tasksService = inject(TasksService)

  onCompleteTask(){
    this.tasksService.deleteTask(this.tasks.id);
  }

}
