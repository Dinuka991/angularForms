import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocFormsComponent } from './poc/poc-forms/poc-forms.component';

const routes: Routes = [
  { path: '' , component: PocFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
