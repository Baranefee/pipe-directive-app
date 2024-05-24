import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-examples',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,PercentPipe],
  templateUrl: './pipe-examples.component.html',
  styleUrl: './pipe-examples.component.css'
})
export class PipeExamplesComponent {

  today: Date = new Date();
  text: string = "Angular UPPERCASE and lowercase PIPES";
  price: number = 1234.56;
  progress: number = 0.56894;
}
