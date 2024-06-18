import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import { newTaskData } from './task/task.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId)
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onClickAddNewTask(){
    this.isAddTask = true;
  }

  onCancelTasks(){
    this.isAddTask = false;
  }

  onAddTask(taskData: newTaskData){

    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddTask = false;
  }

}
