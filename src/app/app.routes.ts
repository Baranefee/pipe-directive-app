import { Routes } from '@angular/router';
import { PipeExamplesComponent } from './components/pipe-examples/pipe-examples.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { TranslateComponent } from './components/translate/translate.component';
import { ColouredComponent } from './components/coloured/coloured.component';


export const routes: Routes = [
    {
        path:"pipe1",
        component:PipeExamplesComponent
    },
    {
        path:"pipe2",
        component:FormControlComponent
    },
    {
        path:"pipe3",
        component:TranslateComponent
    },
    {
        path:"directive1",
        component:ColouredComponent
    }
];
