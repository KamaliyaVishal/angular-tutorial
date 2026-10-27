import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  imports: [Header, User, Tasks],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  users = DUMMY_USERS;
  SelectedUserID = 'u1';

  onUserSelected(userId: string) {
    this.SelectedUserID = userId;
  }

  get selectedUser() {
    return this.users.find(user => user.id === this.SelectedUserID)!;
  }

}
