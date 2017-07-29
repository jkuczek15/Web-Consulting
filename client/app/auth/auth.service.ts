import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WindowService } from '../../includes/window.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  // Use the client window sessionStorage for local storage
  public window;
  public storedURL;
  public debugLogout: boolean = false;
  constructor(private http: Http,
              private winRef: WindowService,
              private router: Router) { this.window = winRef.nativeWindow; }

  saveToken(token) {
    this.window.sessionStorage['auth_token'] = token;
  }// end function saveToken

  getToken() {
    return this.window.sessionStorage['auth_token'];
  }// end function getToken

  loggedIn() {
    // determine if the current user is logged in
    if(!environment.production && !this.debugLogout) {
      return true;
    }// end if we are not in production environment

    // grab the session token
    let token = this.getToken();
    let payload;

    if(token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }// end if we have a token from sessionStorage

  }// end function loggedIn

  currentUser() {
    // Return data about the currently logged in user
    if(!environment.production) {
      // return a fake user if we are in development
      return environment.user;
    }// end if we are not in production environment

    if(this.loggedIn()) {
      var token = this.getToken();
      var payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      return payload;
    }else{
      // Return an empty object if no user to avoid undefined errors
      return {};
    }// end if the user is logged in
    
  }// end function currentUser

  logout(){
    // log the user out by removing them from session
    if(!environment.production){
      this.debugLogout = true;
    }// end if we are not in production environment

    window.sessionStorage.removeItem('auth_token');
    this.router.navigateByUrl('/login');
  }// end function logout

  requireLogin() {
    // Include this at the top of 'ngOnInit' to require login
    if(!this.loggedIn()) {
      // user is not logged in, send them to the login page with an error
      this.storedURL = this.router.url;
      this.router.navigateByUrl('/login/auth_required');
    }// end if the user is not logged in

  }// end function to simpfy required login logic

  redirectIfLoggedIn(url) {
    // Redirect a user to 'url' if they are logged in
    if(this.loggedIn()) {
      this.router.navigateByUrl(url);
      // scroll to the top of the page
      this.window.scrollTo(0,0);
    }// end if the user is logged in

  }// end function to redirect the user if they are logged in
  
}// end class AuthService