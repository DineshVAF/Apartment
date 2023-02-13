import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomDesignComponent } from './room-design.component';

const routes: Routes = [{ path: '', component: RoomDesignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomDesignRoutingModule { }
