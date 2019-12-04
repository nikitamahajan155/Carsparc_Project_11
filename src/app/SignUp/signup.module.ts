import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

export const signupRoute: Routes=[
    {path: '', redirectTo: 'signup', pathMatch:'full'},
    { path: 'signup', component: SignupComponent},
]

@NgModule({
    declarations:[SignupComponent],
    imports:[RouterModule.forChild(signupRoute), CommonModule, ReactiveFormsModule],
    providers:[],
    exports:[SignupComponent]
})

export class SignupModule{

}