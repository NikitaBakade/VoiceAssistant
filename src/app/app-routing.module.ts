import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoboticJokesComponent } from './robotic-jokes/robotic-jokes.component';

const routes: Routes = [
  {path:'', component:RoboticJokesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
