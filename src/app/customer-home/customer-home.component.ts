import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { Router } from '@angular/router';
import { _URL_GET_USER_ACTIVE_JOBS_COUNT, _URL_GET_USER_COMPLETED_JOBS_COUNT, _URL_GET_USER_DETAILS, _URL_GET_USER_JOBS, _URL_GET_USER_PENDING_JOBS_COUNT } from '../services/constants';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent {

  userDetails:any;
  userJobs:any;
  pendingJobsCount:any;
  activeJobsCount:any;
  completedJobsCount:any;

  backendService:BackendService = new BackendService;

  constructor(private router:Router){
    if(localStorage.getItem('Username') && localStorage.getItem('Password')){
      this.userDetails = {
        'Username':localStorage.getItem('Username'),
        'Password':localStorage.getItem('Password'),
        'Name':'',
        'Email':'',
        'Phone':'',
        'Address':''
      }
    }
    else{
      localStorage.clear()
      this.router.navigate([''])
    }
  }
  async ngOnInit(){
    const resp = await this.backendService.postData(_URL_GET_USER_DETAILS, this.userDetails)
    
    this.userDetails=resp[0]
    console.log(this.userDetails)

    
    this.pendingJobsCount = await this.backendService.postData(_URL_GET_USER_PENDING_JOBS_COUNT,this.userDetails)
    this.pendingJobsCount = this.pendingJobsCount.PendingCount
    this.activeJobsCount = await this.backendService.postData(_URL_GET_USER_ACTIVE_JOBS_COUNT,this.userDetails)
    this.activeJobsCount = this.activeJobsCount.ActiveCount
    this.completedJobsCount = await this.backendService.postData(_URL_GET_USER_COMPLETED_JOBS_COUNT,this.userDetails)
    this.completedJobsCount = this.completedJobsCount.CompletedCount
  }

  getUSER_DATA()
  {
    return DataService.USER_DATA;
  }
}
