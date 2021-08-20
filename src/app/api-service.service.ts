import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  recognition =  new webkitSpeechRecognition()
  constructor(private http:HttpClient) { }

  randomApi = "https://official-joke-api.appspot.com/jokes/programming/random";

  init() {
    this.recognition.lang = 'en-US';
  }

  getRandomData(){
    return this.http.get(this.randomApi)
  }

}
