import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class AllrecordService{
    constructor (private http: HttpClient){}
    public AllRecords(){
        let url='https://localhost:44374/api/allsignuprecords';
        return this.http.get(url)  
    }

    public GetRecordsById(Id: any){
        
       let url='https://localhost:44374/api/getbyid/';
         return this.http.get(url +Id)
     
    }
}