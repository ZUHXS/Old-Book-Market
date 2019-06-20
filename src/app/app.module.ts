import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './auth.service';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
import { ChangepasswdComponent } from './changepasswd/changepasswd.component';
import { ChangenickComponent } from './changenick/changenick.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BookComponent } from './book/book.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestComponent } from './requests/request/request.component';
import { CustomerDashComponent } from './customer-dash/customer-dash.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewbookComponent } from './newbook/newbook.component';
import { SellerDashComponent } from './seller-dash/seller-dash.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'nickchange', component: ChangenickComponent },
  { path: 'passwdchange', component: ChangepasswdComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'requests', component: RequestsComponent},
  { path: 'customerdash', component: CustomerDashComponent},
  { path: '404', component: PagenotfoundComponent },
  { path: 'newbook', component: NewbookComponent },
  { path: 'sellerdash', component: SellerDashComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', component: PagenotfoundComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    SidebarComponent,
    NavbarComponent,
    ChangepasswdComponent,
    ChangenickComponent,
    LoginComponent,
    SignupComponent,
    BookComponent,
    RequestsComponent,
    RequestComponent,
    CustomerDashComponent,
    PagenotfoundComponent,
    NewbookComponent,
    SellerDashComponent,
    ChatComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    SimpleNotificationsModule.forRoot({position: ['top', 'right'], timeOut: 2000}),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
