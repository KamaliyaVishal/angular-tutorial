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
  protected readonly title = signal('angular-tutorial');
 
  @Output() selectdUser = new EventEmitter<string>();

  users = DUMMY_USERS;

  onUserSelected(userId: string) {
    console.log(`User selected with ID: ${userId}`);
    this.selectdUser.emit(userId);
  }
}
