import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomDesignRoutingModule } from './room-design-routing.module';
import { RoomDesignComponent } from './room-design.component';


@NgModule({
  declarations: [
    RoomDesignComponent
  ],
  imports: [
    CommonModule,
    RoomDesignRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule ,
  ]
})
export class RoomDesignModule { }
