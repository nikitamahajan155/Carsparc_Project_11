import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EditProfileService{
constructor(private http: HttpClient){}

public editprofile(data:any){
    let url="https://localhost:44374/api/editprofile";
    return this.http.put(url,data)
}

public result: any
public getContactEdit(Contact: any){
    let url="https://localhost:44374/api/GetByContactEdit/find/allow/";
    this.result = this.http.get(url+Contact);
    //console.log(this.result);
    return this.http.get(url+Contact)

}
}