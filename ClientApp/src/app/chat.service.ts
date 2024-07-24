import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public connection : signalR.HubConnection = new signalR.HubConnectionBuilder().withUrl('https://localhost:5000/chat')
  .configureLogging(signalR.LogLevel.Information)
  .build();

  constructor() {
    this.connection.on('ReceiveMessage', (user:string, message:string, messageTime:) => {;
   }

  //start the connection
  public async startConnection(){
    try{
      await this.connection.start();
    }catch(err){
      console.log(err);
      setTimeout(() => this.startConnection(), 5000);
    }
  }

  //Join Room
  public async joinRoom(user: string, room: string){
    return this.connection.invoke("JoinRoom", {user, room});
  }

  //Send Message
  public async sendMessage(message: string){
    return this.connection.invoke('SendMessage', message);
  }

  //Leave Chat
  public async leaveChat(){
    return this.connection.stop();
  }

}
