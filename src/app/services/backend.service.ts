import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const contactsData = [
      {id: 1, name: 'Contact1', email: 'contact1@ltts.com'},
      {id: 2, name: 'Contact2', email: 'Contact2@ltts.com'},
      {id: 3, name: 'Contact3', email: 'Contact3@ltts.com'},
      {id: 4, name: 'contact4', email: 'contact4@ltts.com'},
      {id: 5, name: 'Contact5', email: 'Contact5@ltts.com'}
    ];
    return {contactsData};
  }
}
