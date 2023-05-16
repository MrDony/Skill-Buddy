import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientSignInSignUpComponent } from './client-sign-in-sign-up/client-sign-in-sign-up.component';
import { CustomerSignInSignUpComponent } from './customer-sign-in-sign-up/customer-sign-in-sign-up.component';
import { UserChoiceComponent } from './user-choice/user-choice.component';
import { NotificationComponent } from './notification/notification.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientComponent } from './client/client.component';
import { CustomerComponent } from './customer/customer.component';
import { TopBarClientComponent } from './top-bar-client/top-bar-client.component';
import { TopBarCustomerComponent } from './top-bar-customer/top-bar-customer.component';
import { AddJobComponent } from './add-job/add-job.component';
import { PendingJobsComponent } from './pending-jobs/pending-jobs.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { SearchJobComponent } from './search-job/search-job.component';
import { ClientAppliedJobsComponent } from './client-applied-jobs/client-applied-jobs.component';
import { CustomerActiveJobsComponent } from './customer-active-jobs/customer-active-jobs.component';
import { CustomerCompletedJobsComponent } from './customer-completed-jobs/customer-completed-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientSignInSignUpComponent,
    CustomerSignInSignUpComponent,
    UserChoiceComponent,
    NotificationComponent,
    CustomerHomeComponent,
    ClientHomeComponent,
    ClientComponent,
    CustomerComponent,
    TopBarClientComponent,
    TopBarCustomerComponent,
    AddJobComponent,
    PendingJobsComponent,
    CustomerProfileComponent,
    ClientProfileComponent,
    SearchJobComponent,
    ClientAppliedJobsComponent,
    CustomerActiveJobsComponent,
    CustomerCompletedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
