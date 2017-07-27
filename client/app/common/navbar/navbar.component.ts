import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { SharedModule } from '../../includes/shared.module';
import 'rxjs/add/operator/filter';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Initialize view model variables
  private loggedIn;
  private activeNavID;
  private initialized;
  private isClassVisible = true;

  constructor(private authService: AuthService,
              private shared: SharedModule) { }

  ngOnInit() {
    let self = this;
    this.activeNavID = 'home-link';
  
    // Function to be called each time the route changes
    this.shared.onRouteChange(function(data) {
      if(data.id !== 1) {
        // dont call this function when the route is initialized
        self.loggedIn = self.authService.loggedIn();
        self.removeActive(self.activeNavID);
      }// end if the route was just initialized
    });
  }// end ngOnInit function

  postScroll(id, reachedTarget) {
    // called each time user clicks link and scrolls to section
    if(reachedTarget) {
       this.removeActive(this.activeNavID);
       this.addActive(id);
    }// end if they reached the scroll position
  }// end function postScroll

  addActive(id) {
    $('#' + id).addClass("active");
    this.activeNavID = id;
  }// end function addActive

  removeActive(id) {
    $('#' + id).removeClass("active");
    this.activeNavID = null;
  }// end function removeActive

  logout() {
    this.loggedIn = false;
    this.authService.logout();
    return false;
  }// end logout function

}// end class NavBarComponent
