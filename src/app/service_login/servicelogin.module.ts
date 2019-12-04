import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceLoginComponent } from './servicelogin.component';


export const loginRoute: Routes=[
    {path: '', redirectTo: 'servicelogin', pathMatch:'full'},
    { path: 'servicelogin', component: ServiceLoginComponent}]

@NgModule({
    declarations:[ServiceLoginComponent],
    imports:[RouterModule.forChild(loginRoute), ReactiveFormsModule, CommonModule],
    providers: [],
    exports: [ServiceLoginComponent]
})

export class ServiceLoginModule{

}