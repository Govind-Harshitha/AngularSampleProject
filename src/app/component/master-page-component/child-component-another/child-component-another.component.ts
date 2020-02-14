import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child-component-another',
  templateUrl: './child-component-another.component.html',
  styleUrls: ['./child-component-another.component.css']
})
export class ChildComponentAnotherComponent implements OnInit {
@Output() parent = new EventEmitter<string>();
  message: string;
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe((message) => {
      this.message = message;
    });
  }
sendMessage () {
  this.parent.emit('Send value to Parent');
}
newMessage() {
  this.data.changeMessage('Hello From sibling');
}
}
