import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from './includes/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private show_sidebar_left: boolean = true;
  private show_sidebar_right: boolean = true;

  constructor(private router: Router,
              private shared: SharedModule) { }

  ngOnInit() {
    let self = this;

    // Function to be called each time the route changes
    this.shared.onRouteChange(function() {
      let url = self.router.url;
      // Modify these arrays to hide/show components on different pages
      self.show_sidebar_left = ['/'].indexOf(url) == -1;
      self.show_sidebar_right = ['/'].indexOf(url) == -1;
    });
  }// end ngOninit function

}// end class AppComponent