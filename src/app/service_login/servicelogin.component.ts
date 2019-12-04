import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceLoginService } from './servicelogin.service';

@Component({
    selector: 'servicelogin-comp',
    templateUrl: './servicelogin.component.html',
    styleUrls: ['./servicelogin.component.css'],
    providers: [ServiceLoginService]
})

export class ServiceLoginComponent{
    Varlogin: FormGroup
    model: any = {};
    constructor(private LC: ServiceLoginService, private _router: Router) {
        this.Varlogin = new FormGroup({
            Contact: new FormControl(),
            Password: new FormControl(),

        })
    }

    loginDetails: any
    public LoginCredentials(data: any) {

        console.log(JSON.stringify(data));
        // alert(JSON.stringify(data))

        this.LC.LoginCredentials(data).subscribe(res => {
            this.loginDetails = res
            console.log(res);
            if (this.loginDetails === "Login Successfully") {
                this._router.navigate(['/dashboard'])//;
                //alert('User Logged in Successfully')

            }
            else {
                this._router.navigate(['/login']);
                alert('Not a valid user')
            }
        }, err => {
            console.log(err);
            this.loginDetails = err
        });

        //alert(JSON.stringify(this.loginDetails))

        // if(this.loginDetails && data.Contact == this.loginDetails.Contact && this.loginDetails.Password){
        //if(this.loginDetails && data.Password === this.loginDetails.Password){

    }
}




