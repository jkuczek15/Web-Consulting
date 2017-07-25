import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private authentication: AuthService) { }

  ngOnInit() {
    this.authentication.requireLogin();
  }// end ngOnInit function

}// end class ForumComponent
