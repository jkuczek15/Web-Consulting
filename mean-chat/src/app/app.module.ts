import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatService } from './services/chat.service';
import { ChatComponent } from './chat/chat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForumComponent } from './forum/forum.component';
import { PlayComponent } from './play/play.component';
import { RegisterComponent } from './register/register.component';

const appRoutes: Routes = [
  {
    // index / home page
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forum',
    component: ForumComponent,
  },
  {
    path: 'play',
    component: PlayComponent,
  },
  {
    // take invalid routes and redirect to index 
    path: '**',
    redirectTo: '/'
  }
];

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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
