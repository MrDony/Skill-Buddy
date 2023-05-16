import { Component } from '@angular/core';
import { POSSBILE_SKILL_SET, _URL_ADD_JOB } from '../services/constants';
import { BackendService } from '../services/backend-service';
import { DataService } from '../services/data-service';
import { max } from 'rxjs';
import { NotificationComponent } from '../notification/notification.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  suggestedSkills:any = POSSBILE_SKILL_SET;
  backendService:BackendService = new BackendService;
  skills:any=[]
  wait:any=false;

  constructor(private router:Router){}
  async ngOnInit(){

  }

  addSkill(i:any){
    if(!this.skills.includes(this.suggestedSkills[i]))
      this.skills.push(this.suggestedSkills[i])
  }
  removeSkill(name:any){
    this.skills.splice(this.skills.findIndex((ele: string) => ele === name),1);
  }

  async addJob(title:any, desc:any, minb:any, maxb:any, days:any, months:any, years:any){
    let retbool = false;
    if(title.length==0){NotificationComponent.displayMessage('Invalid Entry','Job needs to have a Title'); retbool=true}
    if(desc.length==0){NotificationComponent.displayMessage('Invalid Entry','Job needs to have a Description'); retbool=true}
    if(minb.length==0){NotificationComponent.displayMessage('Invalid Entry','Job needs to have a Minimum Budget'); retbool=true}
    if(maxb.length==0){NotificationComponent.displayMessage('Invalid Entry','Job needs to have a Maximum Budget'); retbool=true}
    if(retbool) return


    let job = {
      'Username':localStorage.getItem('Username'),
      'Title':title,
      'Description':desc,
      'MinimumBudget':minb.length>0?parseInt(minb):0,
      'MaximumBudget':maxb.length>0?parseInt(maxb):0,
      'ECTDays':days.length>0?parseInt(days):0,
      'ECTMonths':months.length>0?parseInt(months):0,
      'ECTYears':years.length>0?parseInt(years):0
    }

    this.wait=true
    const resp = await this.backendService.postData(_URL_ADD_JOB,job);
    this.wait=false
    this.router.navigate(['/customer-home'])
    console.log(resp)
  }

}
