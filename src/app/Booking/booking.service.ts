import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class BookingService{

constructor (private http: HttpClient){}


public BookingUser(){
    let url='https://localhost:44374/api/booking';
    return this.http.get(url)
    
}

public result: any;
public MaintBookingUser(Nearest_Booking_Id: any){
   // alert(Nearest_Booking_Id);
    let url="https://localhost:44374/api/getbyidmaintenance/find/";
    this.result = this.http.get(url+Nearest_Booking_Id);
    //console.log(this.result);
    return this.http.get(url+Nearest_Booking_Id)
}
}

