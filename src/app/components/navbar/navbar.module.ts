import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
  }
];

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [RouterModule]
})
export class NavbarModule { }
