import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {

  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string
  };

  @Output() selectUser = new EventEmitter();

  // Using the new input decorator, alternative to @Input decorator
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `users/${this.avatar()}`);

  get imagePath() {
    return `users/${this.user.avatar}`;
  }

  selectdUser(userId: string) {
    this.selectUser.emit(userId);
  }

}

