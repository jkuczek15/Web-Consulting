import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqualValidator } from './directives/equal-validator.directive';

@NgModule({
  imports:      [ CommonModule],
  declarations: [ EqualValidator],
  exports:      [ EqualValidator, CommonModule ]
})
export class SharedModule {
    // Shared validation messages among forms
    public validationMessages: any = {
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
        },
        'auth': {
          'incorrectLogin': 'Incorrect email address or password.'
        }
    };

    // Shared regex patterns among forms
    public patterns: any = {
      'username': '^[a-zA-Z0-9]+([-_\.][a-zA-Z0-9]+)*([a-zA-Z0-9])*$',
      'email': /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    };

 }// end class SharedModule