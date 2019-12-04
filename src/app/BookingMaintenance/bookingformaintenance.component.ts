import { Component, OnInit } from '@angular/core';
import { Router, Route, NavigationStart } from '@angular/router';
import { BookingForMaintenanceService } from './bookingformaintenance.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-bookingformaintenance',
  templateUrl: './bookingformaintenance.component.html',
  styleUrls: ['./bookingformaintenance.component.css'],
  providers: [BookingForMaintenanceService]
})
export class BookingformaintenanceComponent implements OnInit {


  public bookingMaintInfo: any

  constructor(private router: Router, private BM1: BookingForMaintenanceService, private toastr: ToastrService) {

    const navigation = this.router.getCurrentNavigation();
    const bookingMaintInfo = navigation.extras.state
    let tempBookingData = navigation.extras;
    this.bookingMaintInfo = tempBookingData[0];
    console.log('=============>' + this.bookingMaintInfo)
  }

  // getbookings(){
  //   const navigation = this.router.getCurrentNavigation();
  //   const bookingMaintInfo = navigation.extras.state
  //   this.bookingMaintInfo = JSON.stringify(navigation.extras);  
  // console.log('=======>'+this.bookingMaintInfo)


  // }

  ngOnInit() {

  }
  toaster() {
    this.toastr.success("Booking Confirmed...!!")
  }
}


  //this.BM= console.log(JSON.parse(this.bookingMaintInfo))
  //console.log(this.BM)




