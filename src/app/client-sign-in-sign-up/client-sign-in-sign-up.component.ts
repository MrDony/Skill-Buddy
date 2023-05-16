import { Component } from '@angular/core';
import { NotificationComponent } from '../notification/notification.component';
import { BackendService } from '../services/backend-service';
import { _URL_ADD_WORKER, _URL_GET_WORKER_DETAILS } from '../services/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-sign-in-sign-up',
  templateUrl: './client-sign-in-sign-up.component.html',
  styleUrls: ['./client-sign-in-sign-up.component.css']
})
export class ClientSignInSignUpComponent {

  show:any=1;
  backendService:BackendService = new BackendService;
  
  constructor(private router: Router){
    this.show=1
  }

  async signInWorker(username:any, password:any){
    if(username.length == 0 )
      NotificationComponent.displayMessage('Invalid Entry','Username length cannot be zero')
    if(password.length == 0)
      NotificationComponent.displayMessage('Invalid Entry', 'Password length cannot be zero')
    if(username.length==0 || password.length==0)
      return
    let user={
      'Username':username,
      'Password':password
    }
    const resp = await this.backendService.postData(_URL_GET_WORKER_DETAILS, user);
    console.log('sign in : ',resp)
    if(resp['error']){
      NotificationComponent.displayMessage('Error',resp['error'])
      console.log('error')
    }
    else{
      localStorage.setItem('Username', username);
      localStorage.setItem('Password', password);
      this.router.navigate(['/client-home'])
    }
  }

  async signUpWorker(username:any, password:any, name:any, description:any, phone:any, email:any ){

    if(username.length == 0 )
      NotificationComponent.displayMessage('Invalid Entry','Username length cannot be zero')
    if(password.length == 0)
      NotificationComponent.displayMessage('Invalid Entry', 'Password length cannot be zero')
    if(name.length == 0 )
      NotificationComponent.displayMessage('Invalid Entry','Name length cannot be zero')
    if(description.length == 0)
      NotificationComponent.displayMessage('Invalid Entry', 'Email length cannot be zero')
    if(phone.length == 0 )
      NotificationComponent.displayMessage('Invalid Entry','Phone length cannot be zero')
    if(email.length == 0)
      NotificationComponent.displayMessage('Invalid Entry', 'Address length cannot be zero')
    if(username.length==0 || password.length==0 || name.length==0 || description.length==0 || phone.length==0 || email.length==0)
      return
    
    let user = {
      'Username':username,
      'Password':password,
      'Name':name,
      'Description':description,
      'Phone':phone,
      'Address':email
    }
    const resp = await this.backendService.postData(_URL_ADD_WORKER, user);
    console.log('sign up : ',resp)

    if(resp['error']){
      NotificationComponent.displayMessage('Error',resp['error'])
      console.log('error')
    }
    else{
      localStorage.setItem('Username', username);
      localStorage.setItem('Password', password);
      this.router.navigate(['/client-home'])
    }
  }

}
