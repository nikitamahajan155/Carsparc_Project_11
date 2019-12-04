import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LoginService{

constructor(private http: HttpClient){}

LoginCredentials(data: any){
    let Url="https://localhost:44374/api/login";
    return this.http.post(Url,data)
}

LoginRecords(data: any){
    let Url="https://localhost:44374/api/loginrecord";
    return this.http.post(Url, data);
}
}