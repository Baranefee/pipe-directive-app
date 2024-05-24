import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private translations: { [key: string]: { [key: string]: string } } = {
    en: {
      'HELLO': 'Hello',
      'WELCOME': 'Welcome'
    },
    es: {
      'HELLO': 'Hola',
      'WELCOME': 'Bienvenido'
    },
    fr: {
      'HELLO': 'Bonjour',
      'WELCOME': 'Bienvenue'
    }
  };

  translate(key: string, lang: string): string {
    return this.translations[lang][key] || key;
  }
}
