import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: string, lang: string): string {
    return this.translateService.translate(value, lang);
  }
}
