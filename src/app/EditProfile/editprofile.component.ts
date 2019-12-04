import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditProfileService } from './editprofile.service';

@Component({
    selector: 'edit-comp',
    templateUrl: './editprofile.component.html',
    styleUrls: ['./editprofile.component.css'],
    providers: [EditProfileService]
})

export class EditprofileComponent implements OnInit {
    EP: FormGroup

    constructor(private EP1: EditProfileService) {
        this.EP = new FormGroup({
            Id: new FormControl(),
            FirmName: new FormControl('', Validators.required),
            OwnerName: new FormControl('', Validators.required),
            Contact: new FormControl('', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
            Email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]),
            Pincode: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9][0-9][0-9][0-9][0-9]$')]),
            Address: new FormControl('', Validators.required),
        })


    }
    public Contact: any
    EProfile: any
    public editprofile(data: any) {
        console.log(JSON.stringify(data));
        //alert(JSON.stringify(data))

        this.EP1.editprofile(data).subscribe(
            res => { this.EProfile = res },
            err => { this.EProfile = err });
        //alert(JSON.stringify(this.EProfile))
        alert('record Updated Successfully')
    }


    public getContact: any;
    public getContactEdit(Contact: any) {
        console.log(JSON.stringify(Contact))

        this.EP1.getContactEdit(Contact).subscribe(res => {
            this.getContact = res;
            const profileDetails = res;
            if (this.getContact && this.getContact.length > 0) {
                this.EP.patchValue(this.getContact[0]);
            }
        },
            err => { this.getContact = err })
    }

    ngOnInit() {
        let contNo = localStorage.getItem('Contact');
        this.getContactEdit(contNo);
    }
}