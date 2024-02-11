import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CanteenComponent } from './canteen/canteen.component';
import {Foodthings} from './Services/food.service';
import {EmployeeDetails} from './Services2/EmployeeDetails.service';

import { AccomodationroomsComponent } from './accomodationrooms/accomodationrooms.component'
import { CommonsearchComponent } from './commonsearch/commonsearch.component'
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { SignupComponent } from './signup/signup.component'
import {HttpClient, HttpClientModule}  from '@angular/common/http';
import{RouteguardService} from './routeguard.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component'
import { AdminguardService } from './adminguard.service';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routeobj: Routes=[
  {path: '' , component: LoginComponent}
  ,{path: 'main' , component: MainComponent,}
  ,{path: 'login' , component: LoginComponent}
  ,{path: 'signup' , component: SignupComponent}
  ,{path: 'cart' , component: CartComponent}
  ,{path: 'addproduct' , component: AddproductComponent}
  ,{path:'products',component:ProductsComponent}
  ,{path: 'admin' , component: AdminloginComponent}
 , {path: 'feedback' , component:FeedbackComponent,canActivate:[RouteguardService]}
  ,{path: 'canteen' , component:CanteenComponent,canActivate:[AdminguardService]}
  ,{path: 'accomodation' ,component:AccomodationroomsComponent,canActivate:[AdminguardService]}
  
  ,{path: 'employeeform' , component:EmployeeformComponent,canActivate:[RouteguardService]}
  ,{path: '**' , component:MainComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    FeedbackComponent,
    CanteenComponent,
    
    AccomodationroomsComponent,
    CommonsearchComponent,
    EmployeeformComponent,
    SignupComponent,
    AdminloginComponent,
    ProductsComponent,
    CartComponent,
    AddproductComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routeobj),
    
  ],
  providers: [Foodthings,EmployeeDetails,RouteguardService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
