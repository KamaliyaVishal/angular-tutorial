import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// Generate a random index to select a user from the DUMMY_USERS array
const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  selectedUser = DUMMY_USERS[randomUserIndex];

  /**
   * Returns the path to the selected user's avatar image.
   */
  get imagePath(): string {
    return `./users/${this.selectedUser.avatar}`;
  }

  /**
   * Selects a random user from the DUMMY_USERS array and updates the selectedUser property.
   */
  selectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log(`Selected user: ${this.selectedUser.name}`);
  }
}
