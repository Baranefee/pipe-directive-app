import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PipeExamplesComponent } from './components/pipe-examples/pipe-examples.component';
import { ColouredDirective } from './directives/coloured.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PipeExamplesComponent,RouterModule,ColouredDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe-directive-app';
}
