import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: '', component: HomeComponent} ,
  { path: 'home', component: HomeComponent} ,
  { path: 'contactus' , component:FormComponent},
  { path: 'about' , component:AboutComponent},
  { path: 'courses', component: CoursesComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
