import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ServiceLoginService{

constructor(private http: HttpClient){}

LoginCredentials(data: any){
    let Url="https://localhost:44374/api/login";
    return this.http.post(Url,data)
}

}