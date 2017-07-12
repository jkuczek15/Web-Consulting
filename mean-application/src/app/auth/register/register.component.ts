import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { RegisterService } from './register.service';

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
              private fb: FormBuilder, 
              private router: Router) { }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: ''
    };
    this.formErrors = JSON.parse(JSON.stringify(this.user));
    this.formErrors.confirm_password = '';
    this.validationMessages = {
      'username': {
        'required':   'Display name is required.',
        'minlength':  'Display name must be at least 4 characters.',
        'maxlength':  'Display name cannot be longer than 24 characters.',
        'pattern':    'Display name is invalid.',
      },
      'email': {
        'required':   'Email is required.',
        'pattern':    'Email is invalid.'
      },
      'password': {
        'required':   'Password is required.'
      },
      'confirm_password': {
        'required':   'Confirmation password is required.',
        'validateEqual': 'Confirmation password must match original password.'
      }
    };

    // Create the form logic and enable the form
    this.buildForm();
    this.active = true;
  }// end onInit function

  buildForm(): void {
    // use Regex patterns for "simple" matching
    let patterns = {
      'username': '^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*([a-zA-Z0-9])*$',
      'email': /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    };

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
    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // set validation messages now
  }// end buildForm function

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
 
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
 
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        this.formErrors[field] = '<ul>';
        
        for (const key in control.errors) {
          this.formErrors[field] += '<li>' + messages[key] + '</li>';
        }// end for loop over all the errors

        this.formErrors[field] += '</ul>';
      }// end if the field has been modified and invalid

    }// end for loop over all form errors

  }// end on value changed function

  register() {
    // We have passed all client-side validation, save the user
    this.registerService.createUser(this.user).then((result) => {
      // Navigate to the login page upon success
      this.router.navigateByUrl('/login');
    }, (err) => {
      console.log(err);
    });
  }// end register function

}// end class RegisterComponent
