import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-image-zoomin',
  templateUrl: './image-zoomin.component.html',
  styleUrls: ['./image-zoomin.component.css']
})
export class ImageZoominComponent implements OnInit {
  base64Image: string;
  imagdataFromBase64: any;
  title: string;

  constructor(private data: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.title = 'Angular zoom in';
    // const imageUrl = 'https://www.gstatic.com/webp/gallery/1.jpg';
    this.data.getBase64ImageFromURL().subscribe(base64data => {
      console.log(base64data);
      // this is the image as dataUrl
      this.base64Image = 'data:image/jpg;base64,' + base64data;
      this.imagdataFromBase64 = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64Image);
    });
  }

}
