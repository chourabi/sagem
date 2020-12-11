import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  messages = [];

  constructor() { }


  addMessage(message){
    this.messages.push(message);

  }

  getMessages(){
    return this.messages;
  }

  clearMessage(){
    this.messages = [];
  }
}
