import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessage',
  standalone: true
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(errors: ValidationErrors | null, control: AbstractControl | null): string {
    if (!errors || !control) {
      return '';
    }

    for (const errorName in errors) {
      if (errors.hasOwnProperty(errorName)) {
        switch (errorName) {
          case 'required':
            return 'This field is required.';
          case 'minlength':
            const minLengthError = errors[errorName];
            return `Minimum length is ${minLengthError.requiredLength}.`;
          case 'maxlength':
            const maxLengthError = errors[errorName];
            return `Maximum length is ${maxLengthError.requiredLength}.`;
          case 'email':
            return 'Invalid email address.';
          // Diğer hata türleri burada eklenebilir
          default:
            return 'Invalid field.';
        }
      }
    }

    return '';
  }
}
