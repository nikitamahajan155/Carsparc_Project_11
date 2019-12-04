import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MasterComponent } from '../master/master.component';
import { HomeComponent } from '../home/home.component';

export const CarRoute: Routes=[
{path: '', component: LoginComponent},
{path: 'button', loadChildren: './Signupbutton/signupbutton.module#SignupbuttonModule'},
{path: 'signup', loadChildren: './SignUp/signup.module#SignupModule'},
{path: 'otp', loadChildren: './otp/otp.module#OtpModule'},
{path: 'servicelogin', loadChildren: './service_login/servicelogin.module#ServiceLoginModule'},
// {path: 'home', component: HomeComponent, children:[
// {path: 'booking', loadChildren: './Booking/booking.module#BookingModule'}
// ]}
// {path: 'home', component: HomeComponent},
// {path: 'booking', loadChildren: './Booking/booking.module#BookingModule'}


{path: 'master', component: MasterComponent, children:[
    {path: 'home', component: HomeComponent},
    {path: 'booking', loadChildren: './Booking/booking.module#BookingModule'},
    {path: 'edit', loadChildren: './EditProfile/editprofile.module#EditprofileModule'},
    {path: 'changepwd', loadChildren: './ChangePassword/changepwd.module#ChangepwdModule'},
    {path: 'admin', loadChildren: './Admin/allrecord.module#AllrecordModule'}
]},
{path: 'bookingmaint', loadChildren: './BookingMaintenance/bookingmaintenance.module#BookingMaintModule'}
]