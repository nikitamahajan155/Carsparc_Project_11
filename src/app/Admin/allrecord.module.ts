import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AllrecordComponent } from './allrecords.component';


export const allrecRoute: Routes=[
    {path: '', redirectTo: 'allrecord', pathMatch:'full'},
    { path: 'allrecord', component: AllrecordComponent}
]

@NgModule({
    declarations: [AllrecordComponent],
    imports: [RouterModule.forChild(allrecRoute), CommonModule, ReactiveFormsModule],
    providers: [],
    exports: [AllrecordComponent]
})

export class AllrecordModule{

}