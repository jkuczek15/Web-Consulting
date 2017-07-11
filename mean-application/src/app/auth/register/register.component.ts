import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  public user;
  public confirm_password;
  constructor(private registerService: RegisterService, private fb: FormBuilder) { }

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: ''
    };
    this.formErrors = {
      'username': '',
      'email': '',
      'password': '',
      'confirm_password': ''
    };
    this.validationMessages = {
      'username': {
        'required': 'Display name is required.',
        'minlength': 'Display name must be at least 4 characters.',
        'maxlength': 'Display name cannot be longer than 24 characters.',
        'pattern': 'Display name is invalid.'
      },
      'email': {
        'required': 'Email is required.',
        'pattern': 'Email is invalid.'
      },
      'password':{
        'required': 'Password is required.'
      },
      'confirm_password':{
        'required': 'Confirmation password is required.'
      }
    };
    this.buildForm();
  }// end onInit function

  buildForm(): void {

    let patterns = {
      'username': '^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*[a-zA-Z0-9]$',
      'email': /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    };

    this.registerForm = this.fb.group({
      'username': [this.user.username, [
          Validators.required,
          Validators.pattern(patterns['username']),
          Validators.minLength(4),
          Validators.maxLength(24)
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
  
    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
 
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
 
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }// end on value changed function

  register() {
    console.log(this.user);
  }// end register function

}// end class RegisterComponent
