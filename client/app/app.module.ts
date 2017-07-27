// Required Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './includes/shared.module';

// External Modules
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// Services
import { AuthService } from './auth/auth.service';
import { LoginService } from './auth/login/login.service';
import { RegisterService } from './auth/register/register.service';
import { ProfileService } from './auth/profile/profile.service';
import { ChatService } from './common/chat/chat.service';
import { HttpClient } from './includes/http-client.service'
import { WindowService } from './includes/window.service'

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

// Initialize routes array with index / HomeComponent
const appRoutes: Routes = [{
    path: '',
    component: HomeComponent,
}];

// Add components to this array if you want the client
// to be able to route to the page using a URL
const routerComponents: any = [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
];

// Begin adding application routes
let addAppRoute = function(routePath, component, optionalParams) {
  // Function for adding a new app route to the Angular Router
  if(optionalParams.length > 0) {
    // We have optional parameters to add to the route    
    optionalParams.forEach(function (param) {
      appRoutes.push({
        path: routePath + '/:' + param,
        component: component
      });
    });// end for loop over optional parameters

  }// end if we have optional parameters

  // Add our default route to the array
  appRoutes.push({
      path: routePath,
      component: component
  });
};

// Do not use the word 'Component' in any custom-components
routerComponents.forEach(function (comp) {
  let routePath = comp.name.replace('Component', '').toLowerCase();
  let optionalParams = [];

  if(routePath == 'login') {
    optionalParams.push('error');
  }// end if routePath is login

  addAppRoute(routePath, comp, optionalParams);
});

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    Ng2PageScrollModule.forRoot(),
    SharedModule
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