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
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ApplicantDetailsComponent } from './components/applicant-details/applicant-details.component';
import { RuleBuilderComponent } from './components/rule-builder/rule-builder.component';
import { RichTextareaComponent } from './components/rich-textarea/rich-textarea.component';

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
        path: 'rulebuilder',
        component: RuleBuilderComponent,
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
        path: 'applicantdetails',
        component: ApplicantDetailsComponent,
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
      },
      {
        path: 'tabs',
        component: TabsComponent,
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
      {
        path: 'shoppingBasket',
        component: ShoppingBasketComponent,
      },
      {
        path: 'richTextArea',
        component: RichTextareaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
