import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { dummyTasks } from './dummy-tasks';

@Component({
  imports: [Task],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {

  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  
  taskList = dummyTasks;

  get selectedUserTasks() {
    return this.taskList.filter(task => task.userId === this.userId);
  }

}
