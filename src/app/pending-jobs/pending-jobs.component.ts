import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend-service';
import { _URL_GET_USER_PENDING_JOBS } from '../services/constants';

@Component({
  selector: 'app-pending-jobs',
  templateUrl: './pending-jobs.component.html',
  styleUrls: ['./pending-jobs.component.css']
})
export class PendingJobsComponent {

  backendService:BackendService = new BackendService;
  jobs:any;
  constructor(private router:Router){}

  async ngOnInit(){
    const user = {'Username':localStorage.getItem('Username')}
    this.jobs = await this.backendService.postData(_URL_GET_USER_PENDING_JOBS,user);
    console.log(this.jobs)
  }
}
