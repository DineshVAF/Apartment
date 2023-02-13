import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authsetup/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';

const routes: Routes = [
   {path:'',component:LoginComponent},
  {
    path: 'layout', component: LayoutComponent, children: [
      { path: 'room', loadChildren: () => import('./modules/room/room.module').then(m => m.RoomModule) },
      { path: 'members', loadChildren: () => import('./modules/members/members.module').then(m => m.MembersModule) },
      { path: 'apartment-details', loadChildren: () => import('./modules/apartment-details/apartment-details.module').then(m => m.ApartmentDetailsModule) },
      { path: 'add-members', loadChildren: () => import('./modules/add-members/add-members.module').then(m => m.AddMembersModule) },
      { path: 'petition', loadChildren: () => import('./modules/petition/petition.module').then(m => m.PetitionModule) },
      { path: 'room-design', loadChildren: () => import('./modules/room-design/room-design.module').then(m => m.RoomDesignModule) },
      { path: 'availability', loadChildren: () => import('./modules/availability/availability.module').then(m => m.AvailabilityModule) }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
