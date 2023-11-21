import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mydata: string= 'You must be the change you wish to see in the world';
  entereddata:string = '';

  onInput(value:string){
    this.entereddata = value;
   // console.log(this.entereddata);
  }

  compare(t1:string, e1:string){
    if(!e1) return "pending";
    return t1 === e1 ? "correct" : "incorrect";

  }
}
