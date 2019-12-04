import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './otp.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export const otpRoute: Routes=[
    {path: '', redirectTo: 'otp', pathMatch:'full'},
    { path: 'otp', component: OtpComponent}
]

@NgModule({
    declarations:[OtpComponent],
    imports:[RouterModule.forChild(otpRoute), CommonModule, FormsModule],
    providers: [],
    exports: [OtpComponent]
})

export class OtpModule{

}