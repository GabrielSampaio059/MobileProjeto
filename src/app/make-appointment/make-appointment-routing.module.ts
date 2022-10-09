import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakeAppointmentPage } from './make-appointment.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export class MakeAppointmentPageModule { }
const routes: Routes = [
  {
    path: '',
    component: MakeAppointmentPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,      
  ],
  exports: [RouterModule],
})
export class MakeAppointmentPageRoutingModule {}
