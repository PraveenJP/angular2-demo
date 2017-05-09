import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  msg = ''
  ClickMe(){
    this.msg = "How Are you?";
    console.log(this.msg);
  }

  items = ['One','Two','Three'];

  addItem(newHero: string){
    if(newHero){
      this.items.push(newHero);
    }
  }

}
