import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentDetailsComponent } from './apartment-details.component';

const routes: Routes = [{ path: '', component: ApartmentDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentDetailsRoutingModule { }
