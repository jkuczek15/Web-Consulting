import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { SharedModule } from '../../shared/shared.module';
import * as UserVM from '../../shared/viewModels/User.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Grab our form reference from the template
  @ViewChild('loginForm') private currentForm: FormGroup;
  
  // Initialize form scope variables
  public formErrors;
  public validationMessages;
  public loginForm: FormGroup;
  private user;
  private active;
  
  // Inject services into our constructor
  constructor(private fb: FormBuilder, 
              private router: Router,
              private loginService: LoginService,
              private sharedModule: SharedModule) { }

  ngOnInit() {
    // Create a new user VM from the User interface
    this.user = new UserVM.modelLogin();
    this.formErrors = JSON.parse(JSON.stringify(this.user));
    this.validationMessages = this.sharedModule.validationMessages;
    
    // Create the form logic and enable the form
    this.buildForm();
    this.active = true;
  }// end onInit function

  buildForm(): void {
    // use Regex patterns for "simple" matching
    let patterns = this.sharedModule.patterns;

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
    this.loginForm.valueChanges.subscribe(data => this.sharedModule.onValueChanged(this, 'loginForm', data));
    this.sharedModule.onValueChanged(this, 'loginForm'); // set validation messages now
  }// end buildForm function

  login() {
    // We have passed all client-side validation, save the user
    this.loginService.getUser(this.user).then((user: any[]) => {
      // Navigate to the login page upon success
      if(user && user.length > 0) {
        // TODO: Do something to save the user data
        console.log(user);
        this.router.navigateByUrl('/');
      }else{
        this.formErrors['topLevel'] = this.sharedModule.validationMessages['auth']['incorrectLogin'];
      }// end if we got a valid user from data
    }, (err) => {
      console.log(err);
    });
  }// end register function

}// end class RegisterComponent