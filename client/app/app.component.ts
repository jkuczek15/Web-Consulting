import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from './includes/shared.module';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // Boolean variables to keep track if we are displaying certain elements
  private show_sidebar_left: boolean = true;
  private show_sidebar_right: boolean = true;
  private show_item_spacing: boolean = false;

  constructor(private router: Router,
              private shared: SharedModule,
              private authentication: AuthService) { }

  ngOnInit() {
    let self = this;
    
    // List of URL's to determine if we are showing/hiding certain elements
    let no_item_spacing = ['/', '/login'];
    let no_sidebar_right = ['/', '/play', '/login', '/register'];
    let no_sidebar_left = ['/'];

    // Function to be called each time the route changes
    this.shared.onRouteChange(function() {
      let url = self.router.url;

      if(self.authentication.loggedIn()) {
        // user is logged in, determine when to show sidebars
        self.show_sidebar_left = no_sidebar_left.indexOf(url) == -1;
      } else {
        self.show_sidebar_left = false;
      }// end if the user is logged in, show the sidebar

      self.show_item_spacing = no_item_spacing.indexOf(url) == -1;
      self.show_sidebar_right = no_sidebar_right.indexOf(url) == -1;
    });
  }// end ngOninit function

}// end class AppComponent