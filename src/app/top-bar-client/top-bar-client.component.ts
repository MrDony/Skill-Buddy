import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar-client',
  templateUrl: './top-bar-client.component.html',
  styleUrls: ['./top-bar-client.component.css']
})
export class TopBarClientComponent {

  constructor(public router:Router){}

  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
