import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private authentication: AuthService) { }

  ngOnInit() {
    // Require that the user be logged in
    this.authentication.requireLogin();
  }// end ngOnInit function

}// end class PlayComponent
