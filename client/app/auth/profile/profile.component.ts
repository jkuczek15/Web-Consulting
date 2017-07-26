import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProfileService } from './profile.service';
import * as UserVM from '../../includes/viewModels/User.js';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // Initialize view model variables
  private currentUser;
  constructor(private authentication: AuthService,
              private profileService: ProfileService) { }

  ngOnInit() {
    // Require that the user be logged in
    //this.authentication.requireLogin();
    this.currentUser = new UserVM.Profile();
    
    // Grab our profile data using the service
    this.profileService.getProfile().then((data: any) => {
      this.currentUser = data;
      // Format our date to look pretty
      this.currentUser.created = moment(this.currentUser.created).format('MMMM Do YYYY, h:mm a');
    }, (err) => {
      if(err.status !== 401){
        console.log(err);
      }// end if not unauthorized error
    });
  }// end ngOnInit function

}// end class ProfileComponent