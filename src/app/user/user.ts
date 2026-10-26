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

  // Getter for image path based on selected users avatar
  get imagePath(): string {
    return `./users/${this.selectedUser.avatar}`;
  }

  selectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log(`Selected user: ${this.selectedUser.name}`);
  }
}
