import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  // Initialize view model variables
  private loggedIn;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.router.events.filter(event => (event instanceof NavigationEnd))
          .subscribe((routeData: any) => {
            this.loggedIn = this.authService.loggedIn();
          });
    this.loggedIn = this.authService.loggedIn();
  }// end ngOnInit function

  logout(){
    this.authService.logout();
    this.loggedIn = false;
    return false;
  }// end logout function

}// end class NavBarComponent
