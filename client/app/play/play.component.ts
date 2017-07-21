import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as createjs from 'createjs-module';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {

  constructor(private authentication: AuthService) { }

  ngOnInit() {
    // Require that the user be logged in
    this.authentication.requireLogin();
  }// end ngOnInit function

  ngAfterViewInit() {
    // Create the stage using createjs: http://createjs.com/docs
    var stage = new createjs.Stage("gameCanvas");
   
    // Create a new circle and add to canvas
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 30);
    circle.x = 50;
    circle.y = 50;
    
    stage.addChild(circle);
    
    // Refresh the stage
    stage.update();

    // Animate the circle
    createjs.Tween.get(circle, { loop: true })
    .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ y: 200 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ x: 50 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ y: 50 }, 1000, createjs.Ease.getPowInOut(4));
    
    // Add timer / event listener to stage
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }// end ngAfterViewInit function

}// end class PlayComponent
