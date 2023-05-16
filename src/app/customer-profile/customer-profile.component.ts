import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend-service';
import { _URL_GET_USER_DETAILS } from '../services/constants';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent {

  User:any;
  backendService:BackendService = new BackendService;
  loading:any = true;
  edit:any = false;
  
  constructor(public router:Router){this.loading=true;this.edit=false;}

  async ngOnInit(){
    let user = {
      'Username': localStorage.getItem('Username'),
      'Password': localStorage.getItem('Password')
    }
    this.User = await this.backendService.postData(_URL_GET_USER_DETAILS,user)
    this.User = this.User[0]
    console.log(this.User)
    this.loading=false
  }
}
