import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './components/audit/audit.component';
import { DownloadComponent } from './components/download/download.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { UploadComponent } from './components/upload/upload.component';
import { UserformComponent } from './components/userform/userform.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddApplicantComponent } from './components/add-applicant/add-applicant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      // {
      //   path : 'dashboard',
      //   component : DownloadComponent
      // },
      {
        path: 'process',
        component: UploadComponent,
      },
      {
        path: 'users',
        component: UserlistComponent,
      },
      {
        path: 'addapplicant',
        component: AddApplicantComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'userform',
        component: UserformComponent,
      },
      {
        path: 'voucherlist',
        component: AuditComponent,
      },
      {
        path: 'shopping',
        component: ShoppinglistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}