import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { DownloadComponent } from './components/download/download.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserformComponent } from './components/userform/userform.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProgressComponent } from './components/progress/progress.component';
import { DndDirective } from './_directives/dnd/dnd.directive';
import { AuditComponent } from './components/audit/audit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from './components/shared-component/shared-component.module';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddApplicantComponent } from './components/add-applicant/add-applicant.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DialogboxComponent } from './components/dialogbox/dialogbox.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ApplicantDetailsComponent } from './components/applicant-details/applicant-details.component';
import { RuleBuilderComponent } from './components/rule-builder/rule-builder.component';
import { RuleContainerComponent } from './components/rule-builder/components/rule-container/rule-container.component';
import { ActionBarComponent } from './components/rule-builder/components/action-bar/action-bar.component';
import { GroupComponent } from './components/rule-builder/components/group/group.component';
import { NotificationComponent } from './components/notification/notification.component';
import { GlobalSearchComponent } from './components/global-search/global-search.component';
import { ChatComponent } from './components/chat/chat.component';
import { RichTextareaComponent } from './components/rich-textarea/rich-textarea.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

// import { TableListComponent } from './components/shared-component/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UploadComponent,
    DownloadComponent,
    UserlistComponent,
    UserformComponent,
    MenuComponent,
    HeaderComponent,
    ProgressComponent,
    DndDirective,
    AuditComponent,
    ShoppinglistComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AddApplicantComponent,
    DashboardComponent,
    Dashboard2Component,
    FooterComponent,
    DialogboxComponent,
    ShoppingBasketComponent,
    TabsComponent,
    ApplicantDetailsComponent,
    RuleBuilderComponent,
    RuleContainerComponent,
    ActionBarComponent,
    GroupComponent,
    NotificationComponent,
    GlobalSearchComponent,
    ChatComponent,
    RichTextareaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SharedComponentModule,
    MatSidenavModule,
    DragDropModule,
    MatTabsModule,
    AngularEditorModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
