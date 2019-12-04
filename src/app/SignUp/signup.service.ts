import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class SignupService{
    get SignUpRef(){
        return window
    }
constructor (private http: HttpClient){}

public SignupUser(data){
    let url='https://localhost:44374/api/servicesignup';
    return this.http.post(url,data)
}

}