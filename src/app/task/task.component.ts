import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
  @Input() name: string = '';
  @Output() taskClicked = new EventEmitter<string>();

  status: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.status += 10;
    if (this.status === 100) {
      this.taskClicked.next(this.name);
    }
  }

}


