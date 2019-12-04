import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignupbuttonComponent } from './signupbutton.component';

export const signupbuttonRoute: Routes=[
    {path: '', redirectTo: 'button', pathMatch:'full'},
    { path: 'button', component: SignupbuttonComponent}
]

@NgModule({
    declarations:[SignupbuttonComponent],
    imports:[RouterModule.forChild(signupbuttonRoute), CommonModule],
    providers: [],
    exports: [SignupbuttonComponent]
})

export class SignupbuttonModule{

}