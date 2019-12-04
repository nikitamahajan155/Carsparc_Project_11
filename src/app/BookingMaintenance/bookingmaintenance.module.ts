import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingformaintenanceComponent } from './bookingformaintenance.component';
import { BookingForMaintenanceService } from './bookingformaintenance.service';


export const maintroute: Routes=[
    {path: '', redirectTo: 'bookingmaint', pathMatch:'full'},
    { path: 'bookingmaint', component: BookingformaintenanceComponent}
]


@NgModule({
    declarations:[BookingformaintenanceComponent],
    imports:[RouterModule.forChild(maintroute), CommonModule, ReactiveFormsModule],
    providers:[BookingForMaintenanceService],
    exports:[BookingformaintenanceComponent]
})

export class BookingMaintModule{

}