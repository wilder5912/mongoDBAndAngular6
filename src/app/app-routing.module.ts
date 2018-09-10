import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './views/home-page/home-page.component';
import {AppComponent} from './app.component';
const routes: Routes = [
/*
  { path : 'home', component: HomePageComponent},
*/
  { path : '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
