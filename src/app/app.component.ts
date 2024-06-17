import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from "./tasks/tasks.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf]
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId?:string;

    get selectedUser(){
        return this.users.find((user) => user.id === this.selectedUserId)
    }

    onUserSelect(id : string){
        // console.log('User id is: ' + id)
        this.selectedUserId = id;
    }
}
