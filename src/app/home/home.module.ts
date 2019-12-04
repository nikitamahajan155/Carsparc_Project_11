import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';

export const homeroute: Routes=[
    {path: '', redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent}
]


@NgModule({
    declarations:[HomeComponent],
    imports:[RouterModule.forChild(homeroute), CommonModule, ReactiveFormsModule],
    providers:[],
    exports:[HomeComponent]
})

export class HomeModule{

}