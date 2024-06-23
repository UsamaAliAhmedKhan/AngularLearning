import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { type newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTasksComponent]
})
export class TasksComponent {

  @Input({required:true}) name?:string;
  @Input({required:true}) userId!:string;

  isAddTask = false;

  constructor(private tasksService: TasksService){}

  get selectedUserTasks(){
    return this.tasksService.selectedTasks(this.userId)
  }

  onCompleteTask(id:string){
    this.tasksService.deleteTask(id)
  }

  onClickAddNewTask(){
    this.isAddTask = true;
  }

  onCancelTasks(){
    this.isAddTask = false;
  }

}
