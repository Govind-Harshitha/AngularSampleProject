import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject('Defaulty Message');
  currentMessage = this.messageSource.asObservable();
  constructor(public http: HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  getData() {
    return {
      'employees': [
      {
      'id': 1,
      'name': 'Tony Stark',
      'email': 'tony@mcu.com',
      'phone': '001-123-4567'
      },
      {
      'id': 2,
      'name': 'Black Widow',
      'email': 'black-widow@mcu.com',
      'phone': '001-123-4568'
      }
    ]
    };
  }
//   getImage(): Observable<Blob> {
//     return this.http.get('http://www.iamrohit.in/wp-content/uploads/2018/11/angular-image-zoom-component.png', {responseType: "blob"});
// }
getBase64ImageFromURL() {
  return Observable.create((observer: Observer<string>) => {
    // create an image object
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = `https://www.gstatic.com/webp/gallery/1.jpg`;
    // img.src = `http://www.hdwallpaperspulse.com/wp-content/uploads/2019/02/15/mountain-Full-HD-Nature-Wallpaper.jpg`;
    if (!img.complete) {
        // This will call another method that will create image from url
        img.onload = () => {
        observer.next(this.getBase64Image(img));
        observer.complete();
      };
      img.onerror = (err) => {
         observer.error(err);
      };
    } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
    }
  });
}
getBase64Image(img: HTMLImageElement) {
  // We create a HTML canvas object that will create a 2d image
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  // This will draw image
  ctx.drawImage(img, 0, 0);
  // Convert the drawn image to Data URL
  const dataURL = canvas.toDataURL('image/png');
return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
}

}
