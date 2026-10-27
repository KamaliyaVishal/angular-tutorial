import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {

  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  @Output() selectUser = new EventEmitter();

  // Using the new input decorator, alternative to @Input decorator
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => `users/${this.avatar()}`);

  get imagePath() {
    return `users/${this.avatar}`;
  }

  selectdUser(userId: string) {
    this.selectUser.emit(userId); 
  }

}

