import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { AuthService } from '../auth.service';
import { SharedModule } from '../../includes/shared.module';
import * as UserVM from '../../includes/viewModels/User.js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // Grab our form reference from the template
  @ViewChild('registerForm') private currentForm: FormGroup;
  
  // Initialize form scope variables
  public formErrors;
  public validationMessages;
  public registerForm: FormGroup;
  private user;
  private confirm_password;
  private active;
  
  // Inject services into our constructor
  constructor(private registerService: RegisterService, 
              private authentication: AuthService,
              private fb: FormBuilder, 
              private router: Router,
              private shared: SharedModule) { }

  ngOnInit() {
    // Create a new user VM from the User interface
    this.user = new UserVM.Register();
    
    // Setup form errors and validation messages
    this.formErrors = JSON.parse(JSON.stringify(this.user));
    this.validationMessages = this.shared.validationMessages;

    // Create the form logic and enable the form
    this.buildForm();
    this.active = true;
  }// end onInit function

  buildForm(): void {
    // use Regex patterns for "simple" matching
    let patterns = this.shared.patterns;

    // Create our form and set any validation rules 
    this.registerForm = this.fb.group({
      'username': [this.user.username, [
          Validators.required,
          Validators.pattern(patterns['username']),
          Validators.minLength(4),
          Validators.maxLength(24),
        ]
      ],
      'email': [this.user.email, [
          Validators.required,
          Validators.pattern(patterns['email'])
        ]
      ],
      'password': [this.user.password, [
          Validators.required
        ]
      ],
      'confirm_password': [this.confirm_password, [
          Validators.required
        ]
      ]
    });
    
    // Subscribe and call this function if data in the form changes
    this.registerForm.valueChanges.subscribe(data => this.shared.onValueChanged(this, 'registerForm', data));
    this.shared.onValueChanged(this, 'registerForm');
  }// end buildForm function

  register() {
    // We have passed all client-side validation, save the user
    this.registerService.register(this.user).then((data: any) => {
      // User is created / authenticated
      this.authentication.saveToken(data.token);
      // Navigate to the welcome page upon success
      this.router.navigateByUrl('/');
    }, (err) => {
      console.log(err);
    });
  }// end register function

}// end class RegisterComponent