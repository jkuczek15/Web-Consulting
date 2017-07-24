import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { WindowService } from '../includes/window.service';
import * as createjs from 'createjs-module';
var self;

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit, AfterViewInit {

  private window;
  private player;
  private stage;
  private readonly SPEED = 10;
  private readonly RADIUS = 30;

  constructor(private authentication: AuthService,
              private winRef: WindowService) { this.window = winRef.nativeWindow; }

  ngOnInit() {
    // Require that the user be logged in
    this.authentication.requireLogin();
    self = this;
  }// end ngOnInit function

  ngAfterViewInit() {
    // Create the stage using createjs: http://createjs.com/docs
    let stage = this.stage = new createjs.Stage("gameCanvas");
   
    // Create a new circle and add to canvas
    let circle = this.player = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, this.RADIUS);
    circle.x = 50;
    circle.y = 50;
    
    // Create a function for handling the circle dragging
    (<any> circle).on("pressmove", function(event) {
      let circle = event.target;
      circle.x = event.stageX;
      circle.y = event.stageY;
    });

    // Add the circle to the stage
    stage.addChild(circle);
    
    // Refresh the stage
    stage.update();
   
    // Add a keypress event listener for circle movement
    window.addEventListener("keydown", this.keyPress);
    window.addEventListener("keyup", this.keyPress);

    // Add timer / event listener to stage
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
  }// end ngAfterViewInit function

  keyPress(event) { 
    // handle user keyboard input  
    if(event.code != 'F12'){
      // allow developer tools
      event.preventDefault();
    }// end if event code is not F12
  
    if(event.type === 'keydown') {
      // user pressed a key
      handleInput(event.code);
    }// end if type == 'keydown'

  }// end function keyPress

  ngOnDestroy() {
    // Remove the keyboard event listeners once we switch components
    window.removeEventListener("keydown", this.keyPress);
    window.removeEventListener("keyup", this.keyPress);
  }// end ngOnDestroy function
  
}// end class PlayComponent

var handleInput = function(key) {
  // handle keyboard input and move the player
  let player = self.player;
  let SPEED = self.SPEED;
  let RADIUS = self.RADIUS;
  let canvas = self.stage.canvas;

  // handle moving the player
  switch(key) {
    case 'ArrowLeft':
    case 'KeyA':
        if(player.x > RADIUS)
          player.x -= SPEED;                
        break;
    case 'ArrowRight':
    case 'KeyD':
        if(player.x < canvas.width - RADIUS)
          player.x += SPEED;
        break;
    case 'ArrowUp':
    case 'KeyW':
        if(player.y > RADIUS)
          player.y -= SPEED;
        break;
    case 'ArrowDown':
    case 'KeyS':
        if(player.y < canvas.height - RADIUS)
          player.y += SPEED;
        break;
  }// end switch statement handling input
  
  // refresh the stage
  self.stage.update();
}// end function handleInput