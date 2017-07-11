import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

/** Custom equal validator for matching password and confirm password */
export function equalValidator(password: string): ValidatorFn {
  
  return (control: AbstractControl): {[key: string]: any} => {
    const confirm_password = control.value;
    
    const valid = confirm_password === password;
    
    console.log('-----------------------');
    console.log('password: ' + password);
    console.log('confirm_password: ' + confirm_password);
    console.log('-----------------------');
    return valid ? null : {'equalValidator': 'error'};
  };
}

@Directive({
  selector: '[equalValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true}]
})

export class EqualValidatorDirective implements Validator, OnChanges {
  @Input() equalValidator: string;
  private valFn = Validators.nullValidator;
  
  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['equalValidator'];

    
    if (change) {
      console.log(change);
      const val: string | string = change.currentValue;
      this.valFn = equalValidator(val);
    } else {
      this.valFn = Validators.nullValidator;
    }// end if changes

  }// end ngOnChanges function
 
  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }// end validate function

}// end class EqualValidatorDirective