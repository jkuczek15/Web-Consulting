import { Component, OnInit, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';
import { SharedModule } from '../../includes/shared.module';
import * as UserVM from '../../includes/viewModels/User.js';

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
  public validationMessages;
  public loginForm: FormGroup;
  private user;
  private active;
  private error;
  
  // Inject services into our constructor
  constructor(private fb: FormBuilder, 
              private router: Router,
              private route: ActivatedRoute,
              private cd: ChangeDetectorRef,
              private loginService: LoginService,
              private authentication: AuthService,
              private shared: SharedModule) {this.error = route.params.map(p => p.error); }

  ngOnInit() {
    // Create a new user VM from the User interface
    this.user = new UserVM.Login();
    this.formErrors = JSON.parse(JSON.stringify(this.user));
    this.validationMessages = this.shared.validationMessages;

    // Create the form logic and enable the form
    this.buildForm();
    this.active = true;
  }// end onInit function

  ngAfterViewChecked() {
    this.route.params.subscribe( params => {
      // Subscribe to route parameter changes after the DOM is ready
      if(!params.error){
        this.authentication.storedURL = null;
      }// end if we need to reset the storedURL

      // Set the authentication form error
      this.formErrors['email'] = this.validationMessages[params.error];
      this.cd.detectChanges();
    });
  }// end ngAfterViewChecked function (DOM READY)

  buildForm(): void {
    // use Regex patterns for "simple" matching
    let patterns = this.shared.patterns;

    // Create our form and set any validation rules 
    this.loginForm = this.fb.group({
      'email': [this.user.email, [
          Validators.required,
          Validators.pattern(patterns['email'])
        ]
      ],
      'password': [this.user.password, [
          Validators.required
        ]
      ]
    });
    
    // Subscribe and call this function if data in the form changes
    this.loginForm.valueChanges.subscribe(data => this.shared.onValueChanged(this, 'loginForm', data));
    // Set validation messages now
    this.shared.onValueChanged(this, 'loginForm'); 
  }// end buildForm function

  login() {
    // We have passed all client-side validation, save the user
    this.loginService.login(this.user).then((data: any) => {
        // User is authenticated, store the token
        this.authentication.saveToken(data.token);
        // Navigate to the stored page or the index page depending on the request
        this.router.navigateByUrl(this.authentication.storedURL || '/');
    }, (err) => {
      if(err.status === 401){
        // User is unauthorized
        this.formErrors['email'] = JSON.parse(err._body).message;
      }else{
        console.log(err);  
      }// end if status is 401
    });
  }// end register function

}// end class RegisterComponent