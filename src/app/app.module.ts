import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarRoute } from './routing/route.config';
import { MasterpageComponent } from './Masterpage/masterpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    LoginComponent,
    MasterpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(CarRoute),
    FormsModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot({preventDuplicates: true})
  ],
  providers: [],
  bootstrap: [MasterpageComponent]
})
export class AppModule { }
