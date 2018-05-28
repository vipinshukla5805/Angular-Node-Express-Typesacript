import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule} from '@angular/material'
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './checkin.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from '../../shared/shared.module'
const routes: Routes = [
  { path: '', component: CheckInComponent }
];

@NgModule({
  declarations: [
    CheckInComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule
  ],
  exports:[
    RouterModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
    ],
  providers: []
})
export class CheckInModule { }
