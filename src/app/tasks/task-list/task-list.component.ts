import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks = ['Cook', 'Do laundry', 'Clean up', 'Walk the dog'];

  constructor() { }

  ngOnInit() {
  }

  getBgColor(i) {
    if (i === 0) {
      return "pink";
    }
  }

  getBold(i) {
    if (i % 2 !== 0) {
      return 'bold';
    }
  }

  handleStatus100(name: string) {  
      alert( name + ": 100-as status elérve" );    
  }

}
