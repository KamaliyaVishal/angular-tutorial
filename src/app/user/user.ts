import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  selectedUser = DUMMY_USERS[randomUserIndex];

  get imagePath(): string {
    return `./users/${this.selectedUser.avatar}`;
  }
}
