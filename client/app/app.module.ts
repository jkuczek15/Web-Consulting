// Required Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Custom Modules
import { FormValidator } from '../includes/utils/form-validator.module';
import { RouteHelper } from '../includes/utils/route-helper.module';

// External Modules (NPM)
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Services
import { AuthService } from './auth/auth.service';
import { LoginService } from './auth/login/login.service';
import { RegisterService } from './auth/register/register.service';
import { ProfileService } from './auth/profile/profile.service';
import { ChatService } from './common/chat/chat.service';
import { HttpClient } from '../includes/http-client.service'
import { WindowService } from '../includes/window.service'

// Main Application Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidebarLeftComponent } from './common/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './common/sidebar-right/sidebar-right.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './common/chat/chat.component';

// Router Components
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Initalize all our routes to point to specific components
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
     path: 'login',
     component: LoginComponent
  },
  {
    path: 'login/:error',
    component: LoginComponent
  },
  {
     path: 'register',
     component: RegisterComponent
  },
  {
     path: 'profile',
     component: ProfileComponent
  },
  {
     path: 'dashboard',
     component: DashboardComponent
  }
];

// Take invalid routes and redirect users to index
appRoutes.push({
  path: '**',
  redirectTo: '/'
});

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    Ng2PageScrollModule.forRoot(),
    FormValidator,
    RouteHelper
  ],
  providers: [
    AuthService,
    ChatService,
    HttpClient, 
    LoginService,
    ProfileService,
    RegisterService,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }