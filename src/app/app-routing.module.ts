import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { MockComponent } from './mock/mock.component';
import { CheckboxTaskComponent } from './checkbox-task/checkbox-task.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'Home', 
    pathMatch: 'full'
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'Location',
    component:LocationComponent
  },
  {
    path:'mock',
    component:MockComponent
  },
  {
    path:'checkboxTask',
    component:CheckboxTaskComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }