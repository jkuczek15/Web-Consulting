import { Component, OnInit, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth.service';
import { FormValidator } from '../../../includes/utils/form-validator.module';
import * as UserVM from '../../../includes/viewModels/User.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewChecked {

  // Grab our form reference from the template
  @ViewChild('loginForm') private currentForm: FormGroup;
  
  // Initialize form scope variables
  public formErrors;
  public loginForm: FormGroup;
  public active;
  public user;
  //private error;
  
  // Inject services into our constructor
  constructor(private fb: FormBuilder, 
              private router: Router,
              private route: ActivatedRoute,
              private cd: ChangeDetectorRef,
              private loginService: LoginService,
              private authentication: AuthService,
              private validator: FormValidator) {  }

  ngOnInit() {
    this.authentication.redirectIfLoggedIn('/profile');
    // Create a new user VM from the User interface
    this.user = new UserVM.Login();
    this.formErrors = JSON.parse(JSON.stringify(this.user));

    // Create the form logic and enable the form
    this.buildForm();
    this.active = true;
  }// end onInit function

  ngAfterViewChecked() {
    this.route.params.subscribe( params => {
      // Subscribe to route parameter changes after the DOM is ready
      if(!params.error) {
        this.authentication.storedURL = null;
      }else if(!this.formErrors['top']) {
        // Set the authentication form error
        this.formErrors['top'] = this.validator.validationMessages[params.error];
        this.cd.detectChanges();
      }// end if we need to reset the storedURL      
    });
  }// end ngAfterViewChecked function (DOM READY)

  buildForm(): void {
    // use Regex patterns for "simple" matching
    let patterns = this.validator.patterns;

    // Create our form and set any validation rules 
    this.loginForm = this.fb.group({
      'email': [this.user.email, [
          Validators.pattern(patterns['email'])]
        ],
      'password': [this.user.password]
    });
    
    // Subscribe and call this function if data in the form changes
    this.loginForm.valueChanges.subscribe(data => this.validator.onValueChanged(this, 'loginForm', true, data));
    // Set validation messages now
    this.validator.onValueChanged(this, 'loginForm', true); 
  }// end buildForm function

  login() {
    if(!environment.production) {
      // we are not in production
      this.authentication.debugLogout = false;
      // Navigate to the stored page or the index page depending on the request
      this.router.navigateByUrl(this.authentication.storedURL || '/dashboard');
    }// end if we are not in production environment

    // We have passed all client-side validation, save the user
    this.loginService.login(this.user).then((data: any) => {
        // User is authenticated, store the token
        this.authentication.saveToken(data.token);
        // Navigate to the stored page or the index page depending on the request
        this.router.navigateByUrl(this.authentication.storedURL || '/dashboard');
    }, (err) => {
      if(err.status === 401) {
        // User is unauthorized, set the error message
        this.formErrors['top'] = JSON.parse(err._body).message;
      }else{
        console.log(err);  
      }// end if status is 401
    });
  }// end register function

}// end class RegisterComponent