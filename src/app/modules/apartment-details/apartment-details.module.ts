import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartmentDetailsRoutingModule } from './apartment-details-routing.module';
import { ApartmentDetailsComponent } from './apartment-details.component';


@NgModule({
  declarations: [
    ApartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    ApartmentDetailsRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class ApartmentDetailsModule { }
