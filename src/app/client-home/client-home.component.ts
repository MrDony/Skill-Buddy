import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { _URL_GET_WORKER_ACTIVE_JOBS_COUNT, _URL_GET_WORKER_APPLIED_JOBS_COUNT, _URL_GET_WORKER_DETAILS } from '../services/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent {

  worker:any;
  backendService:BackendService = new BackendService;
  loading:any = true;

  appliedJobsCount:any;
  activeJobsCount:any;

  constructor(private router: Router){
    console.log(localStorage.getItem('Username'))
    console.log(localStorage.getItem('Password'))
    if(localStorage.getItem('Username') && localStorage.getItem('Password')){
      this.worker = {
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
    let user = {
      'Username':localStorage.getItem('Username'),
      'Password':localStorage.getItem('Password')
    }
    this.worker = await this.backendService.postData(_URL_GET_WORKER_DETAILS, user)
    this.worker=this.worker[0]
    console.log(this.worker)
    this.activeJobsCount = await this.backendService.postData(_URL_GET_WORKER_ACTIVE_JOBS_COUNT,user)
    this.appliedJobsCount = await this.backendService.postData(_URL_GET_WORKER_APPLIED_JOBS_COUNT,user)
    this.activeJobsCount = this.activeJobsCount.ActiveCount;
    this.appliedJobsCount = this.appliedJobsCount.ApplicationCount
    console.log(this.activeJobsCount, this.appliedJobsCount)

    this.loading=false;
  }
}
