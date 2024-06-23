import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  constructor(private http:HttpClient){}

  proddes:any={
    anyoffer:``,
    image:``,
    category:"",
    model:'',
    mrp:0,
    price:0,
    star:0



  }
  backurl='https://backend-efms.vercel.app'
  onsubmit()
  {
    const url=this.backurl+'/products'
    this.http.post(url,this.proddes).subscribe((res)=>
    {
      console.log(res)
    })

  }

}
