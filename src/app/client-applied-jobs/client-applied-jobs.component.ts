import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { Router } from '@angular/router';
import { _URL_GET_WORKER_APPLIED_JOBS } from '../services/constants';

@Component({
  selector: 'app-client-applied-jobs',
  templateUrl: './client-applied-jobs.component.html',
  styleUrls: ['./client-applied-jobs.component.css']
})
export class ClientAppliedJobsComponent {

  backendService:BackendService =  new BackendService;
  loading:any = true;
  jobs:any=[];
  constructor(private router:Router){

  }
  async ngOnInit(){
    this.jobs=await this.backendService.postData(_URL_GET_WORKER_APPLIED_JOBS,{'Username':localStorage.getItem('Username')})
    console.log(this.jobs)
    this.loading=false;
  }
}
