import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvailabilityRoutingModule } from './availability-routing.module';
import { AvailabilityComponent } from './availability.component';


@NgModule({
  declarations: [
    AvailabilityComponent
  ],
  imports: [
    CommonModule,
    AvailabilityRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class AvailabilityModule { }
