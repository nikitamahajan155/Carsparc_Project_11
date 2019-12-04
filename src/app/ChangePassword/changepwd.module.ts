import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChangepwdComponent } from './changepwd.component';



export const changepwdRoute: Routes=[
    {path: '', redirectTo: 'changepwd', pathMatch:'full'},
    { path: 'changepwd', component: ChangepwdComponent}
]

@NgModule({
    declarations: [ChangepwdComponent],
    imports: [RouterModule.forChild(changepwdRoute), CommonModule, ReactiveFormsModule, FormsModule],
    providers: [],
    exports: [ChangepwdComponent]
})

export class ChangepwdModule{

}