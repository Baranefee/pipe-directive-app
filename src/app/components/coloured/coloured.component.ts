import { Component } from '@angular/core';
import { ColouredDirective } from '../../directives/coloured.directive';

@Component({
  selector: 'app-coloured',
  standalone: true,
  imports: [ColouredDirective],
  template:`
    <h1  appColoured="Yellow">Directive</h1>
  

  `
})
export class ColouredComponent {

}
