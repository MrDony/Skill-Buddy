import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { Router } from '@angular/router';
import { _URL_GET_WORKER_DETAILS } from '../services/constants';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent {

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
    this.User = await this.backendService.postData(_URL_GET_WORKER_DETAILS,user)
    this.User = this.User[0]
    console.log(this.User)
    this.loading=false
  }
}
