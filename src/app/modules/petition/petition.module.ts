import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetitionRoutingModule } from './petition-routing.module';
import { PetitionComponent } from './petition.component';


@NgModule({
  declarations: [
    PetitionComponent
  ],
  imports: [
    CommonModule,
    PetitionRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class PetitionModule { }
