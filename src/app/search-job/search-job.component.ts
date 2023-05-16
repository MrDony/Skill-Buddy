import { Component } from '@angular/core';
import { BackendService } from '../services/backend-service';
import { _URL_APPLY_JOB, _URL_GET_ALL_JOBS } from '../services/constants';
import { Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent {

  backendService:BackendService =  new BackendService;
  loading:any = true;
  jobs:any;
  constructor(private router:Router){

  }

  async ngOnInit(){
    this.jobs=await this.backendService.postData(_URL_GET_ALL_JOBS,{'Username':localStorage.getItem('Username')})
    console.log(this.jobs)
    this.loading=false;
  }

  async applyForJob(jobID:any){
    let data = {
      'Username':localStorage.getItem('Username'),
      'JobID':jobID
    }
    const resp = await this.backendService.postData(_URL_APPLY_JOB, data)
    console.log('app resp : ',resp)
    if(resp.done)
      this.router.navigate(['/client-home'])
    if(resp.error)
      NotificationComponent.displayMessage(resp.error,'Error')
  }
}
