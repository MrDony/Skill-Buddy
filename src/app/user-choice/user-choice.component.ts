import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend-service';
import { _URL_GET_USER_DETAILS } from '../services/constants';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
  styleUrls: ['./user-choice.component.css']
})
export class UserChoiceComponent {


  router:Router = new Router;
  backendService:BackendService = new BackendService;

  async ngOnInit(){
    const resp = await this.backendService.postData('test', {'Username':'A'})
    console.log(resp)
  }

  goToUserSignInSignUp(){
    this.router.navigate(['/customer'])
  }

  goToWorkerSignInSignUp(){
    this.router.navigate(['/client'])
  }
}
