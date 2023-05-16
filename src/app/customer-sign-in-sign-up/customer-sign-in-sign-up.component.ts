import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { NotificationComponent } from '../notification/notification.component';
import { _URL_ADD_USER, _URL_GET_USER_DETAILS } from '../services/constants';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-customer-sign-in-sign-up',
  templateUrl: './customer-sign-in-sign-up.component.html',
  styleUrls: ['./customer-sign-in-sign-up.component.css']
})
export class CustomerSignInSignUpComponent {

  show:any=1;

  backendService:BackendService = new BackendService;

  constructor(private router: Router){
    this.show=1
  }
  


  async signInUser(username:any, password:any){
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
    const resp = await this.backendService.postData(_URL_GET_USER_DETAILS, user);
    console.log('sign in : ',resp)
    if(resp['error']){
      NotificationComponent.displayMessage('Error',resp['error'])
      console.log('error')
    }
    else{
      localStorage.setItem('Username', username);
      localStorage.setItem('Password', password);
      this.router.navigate(['/customer-home'])
    }
    
  }

  async signUpUser(username:any, password:any, name:any, email:any, phone:any, address:any){
    if(username.length == 0 )
      NotificationComponent.displayMessage('Invalid Entry','Username length cannot be zero')
    if(password.length == 0)
      NotificationComponent.displayMessage('Invalid Entry', 'Password length cannot be zero')
    if(name.length == 0 )
      NotificationComponent.displayMessage('Invalid Entry','Name length cannot be zero')
    if(email.length == 0)
      NotificationComponent.displayMessage('Invalid Entry', 'Email length cannot be zero')
    if(phone.length == 0 )
      NotificationComponent.displayMessage('Invalid Entry','Phone length cannot be zero')
    if(address.length == 0)
      NotificationComponent.displayMessage('Invalid Entry', 'Address length cannot be zero')
    if(username.length==0 || password.length==0 || name.length==0 || email.length==0 || phone.length==0 || address.length==0)
      return
    
    let user = {
      'Username':username,
      'Password':password,
      'Name':name,
      'Email':email,
      'Phone':phone,
      'Address':address
    }
    const resp = await this.backendService.postData(_URL_ADD_USER, user);
    console.log('sign up : ',resp)

    if(resp['error']){
      NotificationComponent.displayMessage('Error',resp['error'])
      console.log('error')
    }
    else{
      localStorage.setItem('Username', username);
      localStorage.setItem('Password', password);
      this.router.navigate(['/customer-home'])
    }
  }







}
