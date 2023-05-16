import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientSignInSignUpComponent } from './client-sign-in-sign-up/client-sign-in-sign-up.component';
import { CustomerSignInSignUpComponent } from './customer-sign-in-sign-up/customer-sign-in-sign-up.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { AddJobComponent } from './add-job/add-job.component';
import { PendingJobsComponent } from './pending-jobs/pending-jobs.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ClientAppliedJobsComponent } from './client-applied-jobs/client-applied-jobs.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { CustomerActiveJobsComponent } from './customer-active-jobs/customer-active-jobs.component';
import { CustomerCompletedJobsComponent } from './customer-completed-jobs/customer-completed-jobs.component';

const routes: Routes = [
  {path:'', component:UserChoiceComponent},
  {path:'client', component:ClientSignInSignUpComponent},
  {path:'client-home', component:ClientHomeComponent},
  {path:'client-profile', component:ClientProfileComponent},
  {path:'client-search-job', component:SearchJobComponent},
  {path:'client-applied-jobs', component:ClientAppliedJobsComponent},
  

  {path:'customer', component:CustomerSignInSignUpComponent}, 
  {path:'customer-home', component: CustomerHomeComponent},
  {path:'customer-profile', component: CustomerProfileComponent},
  {path:'customer-add-job',component: AddJobComponent},
  {path:'customer-pending-jobs',component:PendingJobsComponent},
  {path:'customer-active-jobs',component:CustomerActiveJobsComponent},
  {path:'customer-completed-jobs',component:CustomerCompletedJobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
