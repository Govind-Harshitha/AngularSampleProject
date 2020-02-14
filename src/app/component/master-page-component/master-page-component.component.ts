import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-master-page-component',
  templateUrl: './master-page-component.component.html',
  styleUrls: ['./master-page-component.component.css']
})
export class MasterPageComponentComponent implements OnInit {

  name: string;
  parentMessage: string;
  message: string;
  records: {};
  imageRes: Blob;
  base64Image: string;
  imagdataFromBase64: any;
  constructor(
    private data: DataService
  ) { }
  ngOnInit() {
    if (localStorage['ChangedName']) {
      this.name = localStorage['ChangedName'];
    } else {
      this.name = 'Subrat';
    }
    this.parentMessage = 'Message from parent';
    this.data.currentMessage.subscribe((message) => {
      this.message = message;
      console.log(this.message);
    });
    this.records = this.data.getData();
    console.log('this.records', this.records);
  }

  nameChange() {
    localStorage.setItem('ChangedName', this.name);
  }
  datafromChild(evt) {
    console.log(evt);
  }
}
