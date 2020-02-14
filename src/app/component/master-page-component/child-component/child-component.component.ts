import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() child;
  message: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    console.log('child', this.child);
    this.data.currentMessage.subscribe((message) => {
      this.message = message;
      console.log('Sibling', this.message);
    });
  }

}
