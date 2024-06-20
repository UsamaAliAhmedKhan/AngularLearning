import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { User } from './user.model';
import { CardComponent } from "../sharedUI/card/card.component";

const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomNumber])
// selectedUser = signal(DUMMY_USERS[randomNumber])
// imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
// get imagePath() {
//   return 'assets/users/' + this.selectedUser.avatar
// }

  @Input({required:true}) user! : User;
  @Input({required:true}) selected!: boolean;

  // @Input({required:true}) id !: string;
  // @Input({required:true}) avatar !: string;
  // @Input({required:true}) name !: string;
  @Output() select = new EventEmitter()
  // select = output<string>()

  // input signals
  // avatar = input.required<string>();
  // name = input.required<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

onUserClick() {
  this.select.emit(this.user.id)
  // const randomNumber = Math.floor(Math.random() * DUMMY_USERS.length)
  // this.selectedUser.set(DUMMY_USERS[randomNumber])
  // this.selectedUser = DUMMY_USERS[randomNumber]
}

}
