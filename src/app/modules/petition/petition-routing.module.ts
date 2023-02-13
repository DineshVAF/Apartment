import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetitionComponent } from './petition.component';

const routes: Routes = [{ path: '', component: PetitionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetitionRoutingModule { }
