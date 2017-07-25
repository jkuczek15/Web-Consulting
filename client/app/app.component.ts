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
  private hiddenUrls: any

  constructor(private router: Router,
              private shared: SharedModule,
              private authentication: AuthService) { }

  ngOnInit() {
    let self = this;
    
    // List of URL's to determine if we are showing/hiding certain elements
    this.hiddenUrls = {
      no_item_spacing: ['/', '/login', '/register'],
      no_sidebar_right: ['/', '/play', '/login', '/register'],
      no_sidebar_left: ['/']
    };

    // Function to be called each time the route changes
    this.shared.onRouteChange(function() {
      let url = self.router.url;

      if(self.authentication.loggedIn()) {
        // user is logged in, determine when to show sidebars
        self.displayHandler(url, 'show_sidebar_left');
      } else {
        self.show_sidebar_left = false;
      }// end if the user is logged in, show the sidebar

      self.displayHandler(url, 'show_item_spacing');  
      self.displayHandler(url, 'show_sidebar_right');
    });
  }// end ngOninit function

  displayHandler(url, key) {
    // handler for hiding certain components
    let hiddenUrls = this.hiddenUrls[key.replace('show', 'no')];
   
    for(let str of hiddenUrls) {
      // for loop over all routes to hide
      if(url !== '/' && str !== '/') {
        this[key] = url.indexOf(str) == -1;
        if(!this[key]) {
          break;
        }// end if
      } else if(url !== '/' && str === '/' && hiddenUrls.length === 1) {
        // we have the home page in our array of length 1
        this[key] = true;
      }else {
        this[key] = false;  
      }// end if we are not on home page

    }// end for loop over no_sidebar_right

  }// end function componentHandler

}// end class AppComponent