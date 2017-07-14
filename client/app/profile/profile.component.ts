import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Initialize view model variables
  private currentUser;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.currentUser();
  }// end ngOnInit function

}// end class ProfileComponent
