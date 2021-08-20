import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import alanBtn from "@alan-ai/alan-sdk-web";

@Component({
  selector: 'app-robotic-jokes',
  templateUrl: './robotic-jokes.component.html',
  styleUrls: ['./robotic-jokes.component.scss']
})
export class RoboticJokesComponent implements OnInit {

  apiResponse:any;
  punchString: any;
  setupString: any;
  alanBtnInstance: any;

  constructor(private apiserv:ApiServiceService) {
    this.alanBtnInstance = alanBtn({
      key: '07a1032a89d2ecea4d0bf347580da6fd2e956eca572e1d8b807a3e2338fdd0dc/prod',
      // onCommand: (commandData:any) => {
      //   if (commandData.command === 'go:back') {
      //     // Call the client code that will react to the received command
      //   }
      // },
    });
  }

   ngOnInit(): void { }

  randomClick(){
    console.log('hello robo');
    this.apiserv.getRandomData().subscribe((res)=>{console.log(res);
      this.apiResponse = res;
      // const myString = this.apiResponse.replaceAll("[^a-zA-Z0-9]","");
      this.punchString = this.apiResponse[0].punchline;
      console.log(this.punchString);
      this.punchString.replaceAll(/\|\//g, "");

      this.setupString = this.apiResponse[0].setup;
      console.log(this.setupString);
      this.setupString.replaceAll(/\|\//g, "");

      this.alanBtnInstance.activate().then(() => {
        this.alanBtnInstance.playText(this.setupString);
        this.alanBtnInstance.playText(this.punchString);
      });
    })
  }
}