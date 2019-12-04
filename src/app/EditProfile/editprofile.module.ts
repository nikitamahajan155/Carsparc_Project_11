import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditprofileComponent } from './editprofile.component';
import { EditProfileService } from './editprofile.service';


export const editprofileRoute: Routes=[
    {path: '', redirectTo: 'edit', pathMatch:'full'},
    { path: 'edit', component: EditprofileComponent}
]

@NgModule({
    declarations: [EditprofileComponent],
    imports: [RouterModule.forChild(editprofileRoute), CommonModule, ReactiveFormsModule, FormsModule],
    providers: [EditProfileService],
    exports: [EditprofileComponent]
})

export class EditprofileModule{

}