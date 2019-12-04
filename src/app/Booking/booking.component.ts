import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'booking-comp',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
    providers: [BookingService]
})

export class BookingComponent implements OnInit{
//BCM: any
constructor(private bc1:BookingService, private router: Router){
    // this.BCM = new FormGroup({
    //     Booking_Id: new FormControl()
    // })
}

public bookingInfo: any 

public GetbookingInfo(){

    this.bc1.BookingUser().subscribe(
        res=>{this.bookingInfo=res},
        err=>{this.bookingInfo=err}
        
    )
    //alert(JSON.stringify(this.bookingInfo))
}


ngOnInit(){
    this.GetbookingInfo()
}


public MaintbookingInfo: any 
public Nearest_Booking_Id: Number;
public GetMaintbookingInfo(Booking_Id:number){
//console.log(Booking_Id);
    this.bc1.MaintBookingUser(Booking_Id).subscribe(
        //res=>{this.MaintbookingInfo=res},
        //err=>{this.MaintbookingInfo=err}
        (res: any) => {
            //alert("News Success");
            this.MaintbookingInfo = res; 
            // Where you find the array res.data or res.data.data
           // console.log('res is ', res);
            const navigationExtras: NavigationExtras =  this.MaintbookingInfo;
            this.router.navigate(['/bookingmaint'],navigationExtras);
          },
          error => {
            //alert("ERROR");
          });
    
   
}
}


