import { Component, signal,  } from '@angular/core';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';

@Component({
  imports: [Header, User],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-tutorial');

  users = DUMMY_USERS;

  onUserSelected(userId: string) {
    console.log(`User selected with ID: ${userId}`);
  }
}
