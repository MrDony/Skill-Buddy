import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar-customer',
  templateUrl: './top-bar-customer.component.html',
  styleUrls: ['./top-bar-customer.component.css']
})
export class TopBarCustomerComponent {

  constructor(public router:Router){}

  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
