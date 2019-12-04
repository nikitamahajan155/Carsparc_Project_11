import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './booking.component';
import { BookingService } from './booking.service';

export const bookingroute: Routes=[
    {path: '', redirectTo: 'booking', pathMatch:'full'},
    { path: 'booking', component: BookingComponent}
]


@NgModule({
    declarations:[BookingComponent],
    imports:[RouterModule.forChild(bookingroute), CommonModule, ReactiveFormsModule],
    providers:[BookingService],
    exports:[BookingComponent]
})

export class BookingModule{

}