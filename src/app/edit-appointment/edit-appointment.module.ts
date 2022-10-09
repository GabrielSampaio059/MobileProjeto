import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export class MakeAppointmentPageModule { }
import { IonicModule } from '@ionic/angular';

import { EditAppointmentPageRoutingModule } from './edit-appointment-routing.module';

import { EditAppointmentPage } from './edit-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditAppointmentPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [EditAppointmentPage]
})
export class EditAppointmentPageModule {}
