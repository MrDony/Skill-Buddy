import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { Router } from '@angular/router';
import { _URL_GET_USER_ACTIVE_JOBS } from '../services/constants';

@Component({
  selector: 'app-customer-active-jobs',
  templateUrl: './customer-active-jobs.component.html',
  styleUrls: ['./customer-active-jobs.component.css']
})
export class CustomerActiveJobsComponent {

  backendService:BackendService = new BackendService;
  jobs:any;
  constructor(private router:Router){}

  async ngOnInit(){
    const user = {'Username':localStorage.getItem('Username')}
    this.jobs = await this.backendService.postData(_URL_GET_USER_ACTIVE_JOBS,user);
    console.log(this.jobs)
  }
}
