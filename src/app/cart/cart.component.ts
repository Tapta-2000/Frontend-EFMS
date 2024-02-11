import { Component } from '@angular/core';
import { Foodthings } from '../Services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private card:Foodthings){}

  ngOnInit()
  {
    this.updatecart();

  }
   // anyoffer:``,
  // image:``,
  // category:"",
  // model:'',
  // mrp:0,
  // price:0,
  // star:0

cartarray:any[]=[];



updatecart()
{
   this.card.comingtocart().subscribe((res)=>
   {
    this.cartarray=res;
   });
  
}

  



}
