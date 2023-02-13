import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMembersRoutingModule } from './add-members-routing.module';
import { AddMembersComponent } from './add-members.component';

@NgModule({
  declarations: [
    AddMembersComponent
  ],
  imports: [
    CommonModule,
    AddMembersRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddMembersModule { }
