// Required Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Services
import { ChatService } from './common/chat/chat.service';
import { RegisterService } from './auth/register/register.service';

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

// Directives
import { EqualValidator } from './shared/equal-validator.directive';

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
    PlayComponent
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
    SidebarLeftComponent,
    SidebarRightComponent,
    HomeComponent,
    ForumComponent,
    PlayComponent,
    LoginComponent,
    RegisterComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    ChatService, 
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
