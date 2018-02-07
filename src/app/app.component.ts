import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pageName=["2075369169359255","Newtowordpress"];
  value:string="i am here";
  onClicked(val:string){
    alert(val);
  }
}
