import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { Router } from '@angular/router';
import { _URL_GET_USER_COMPLETED_JOBS } from '../services/constants';

@Component({
  selector: 'app-customer-completed-jobs',
  templateUrl: './customer-completed-jobs.component.html',
  styleUrls: ['./customer-completed-jobs.component.css']
})
export class CustomerCompletedJobsComponent {
  backendService:BackendService = new BackendService;
  jobs:any;
  constructor(private router:Router){}

  async ngOnInit(){
    const user = {'Username':localStorage.getItem('Username')}
    this.jobs = await this.backendService.postData(_URL_GET_USER_COMPLETED_JOBS,user);
    console.log(this.jobs)
  }
}
