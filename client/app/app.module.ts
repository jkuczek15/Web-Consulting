// Required Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

// Services
import { AuthService } from './auth/auth.service';
import { ChatService } from './common/chat/chat.service';
import { RegisterService } from './auth/register/register.service';
import { LoginService } from './auth/login/login.service';
import { WindowService } from './common/window.service'

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
import { ForumComponent } from './forum/forum.component';
import { PlayComponent } from './play/play.component';
import { ProfileComponent } from './profile/profile.component';

// Initialize routes array with index / HomeComponent
const appRoutes: Routes = [{
    path: '',
    component: HomeComponent,
}];

// Initialize custom routes array
const routerComponents: any = [
    LoginComponent,
    RegisterComponent,
    ForumComponent,
    PlayComponent,
    ProfileComponent
];

// Do not use the word 'Component' in any custom-components
routerComponents.forEach(function (comp) {
  appRoutes.push({
      path: comp.name.replace('Component', '').toLowerCase(),
      component: comp
  });
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
    ForumComponent,
    PlayComponent,
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
    SharedModule
  ],
  providers: [
    AuthService,
    ChatService, 
    LoginService,
    RegisterService,
    WindowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
