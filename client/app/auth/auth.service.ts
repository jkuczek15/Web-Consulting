import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { WindowService } from '../common/window.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  // Use the client window sessionStorage for local storage
  public window;
  constructor(private http: Http,
              private winRef: WindowService) { this.window = winRef.nativeWindow; }

  saveToken(token){
    this.window.sessionStorage['auth_token'] = token;
  }// end function saveToken

  getToken(){
    return this.window.sessionStorage['auth_token'];
  }// end function getToken

  loggedIn(){
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

  currentUser(){
    // Return data about the currently logged in user
    if(this.loggedIn()){
      var token = this.getToken();
      var payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      return payload;
    }// end if the user is logged in
    
    // Return an empty object if no user to avoid undefined errors
    return {};
  }// end function currentUser

  logout(){
    window.sessionStorage.removeItem('auth_token');
  }// end function logout
  
}// end class AuthService