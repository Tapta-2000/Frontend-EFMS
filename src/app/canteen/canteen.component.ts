import { Component,OnInit } from '@angular/core';
import {Foodthings} from '../Services/food.service'
import {EmployeeDetails} from '../Services2/EmployeeDetails.service'
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  styleUrls: ['./canteen.component.css']
})
export class CanteenComponent  {

  constructor(private food :Foodthings,private countvn:EmployeeDetails,private http:HttpClient){}

   selectedfile=null;


  fileupload(event)
  {
    console.log(event);
    this.selectedfile=event.target.files[0];
    if(this.selectedfile)
    {
      const fd=new FormData();
      fd.append('file',this.selectedfile,this.selectedfile.name);
      this.foodobj.image='../assets/'+this.selectedfile.name
      console.log(fd);

    }
  
    
  }

  foodobj:any={
    id:0,
    name:'',
    type:'',
    image:'',
    price:0,
    description:''
  }

  weekdays:any={
    monv:0,
    monnv:0,
    tuesv:0,
    tuesnv:0,
    wedv:0,
    wednv:0,
    thuv:0,
    thunv:0,
    friv:0,
    frinv:0,
    satv:0,
    satnv:0,
    sunv:0,
    sunnv:0


  }
  vegnon:any[];
 
  ngOnInit():void
  {
    this.countvn.accessjson().subscribe((val)=>
    {
      console.log(val);
  this.vegnon=val;
  this.weekdays.monv=this.vegnon.filter(x=>x.monday=='veg').length;
  this.weekdays.monnv=this.vegnon.filter(x=>x.monday=='nonveg').length;
  this.weekdays.tuesv=this.vegnon.filter(x=>x.tuesday=='veg').length;
  this.weekdays.tuesnv=this.vegnon.filter(x=>x.tuesday=='nonveg').length;
  this.weekdays.wedv=this.vegnon.filter(x=>x.wednesday=='veg').length;
  this.weekdays.wednv=this.vegnon.filter(x=>x.wednesday=='nonveg').length;
  this.weekdays.thuv=this.vegnon.filter(x=>x.thrusday=='veg').length;
  this.weekdays.thunv=this.vegnon.filter(x=>x.thrusday=='nonveg').length;
  this.weekdays.friv=this.vegnon.filter(x=>x.friday=='veg').length;
  this.weekdays.frinv=this.vegnon.filter(x=>x.friday=='nonveg').length;
  this.weekdays.satv=this.vegnon.filter(x=>x.saturday=='veg').length;
  this.weekdays.satnv=this.vegnon.filter(x=>x.saturday=='nonveg').length;
  this.weekdays.sunv=this.vegnon.filter(x=>x.sunday=='veg').length;
  this.weekdays.sunnv=this.vegnon.filter(x=>x.sunday=='nonveg').length;
  
    });
  
    this.serverfun();

  }
  
  // foodarray:any []=this.food.myarray;
  foodarray:any[]=[];
  private serverfun()
{
    this.http.get<any[]>('http://localhost:3000/Myfoods').subscribe((res)=>
    {
      
      this.foodarray=res;
    
    })
}
  
canform=new FormGroup(
  {
    name:new FormControl(null,Validators.required),
    type:new FormControl(null,Validators.required),
    id:new FormControl(null,Validators.required),
    price:new FormControl(null,Validators.required),
    image:new FormControl(null,Validators.required),
    description:new FormControl(null,Validators.required),

  }
)

get nameo()
{
  return this.canform.get('name')
}
get typeo()
{
  return this.canform.get('type')
}
get ido()
{
  return this.canform.get('id')
}
get priceo()
{
  return this.canform.get('price')
}
 get descripo()
 {
  return this.canform.get('description')
 }

myclass:string='';

fetch()
{
  this.serverfun();
}

   onclick()
   {
    this.food.addarray(this.foodobj);
    this.http.post('http://localhost:3000/Myfoods',this.foodobj).subscribe((res)=>
    {
      console.log(res);
   

      
    });
    
  
   
    this.foodobj={
      id:0,
      name:'',
      type:'',
      image:'',
      price:0,
      description:''
    }
   }
   mysearchfun(data:string)
   {
    this.foodarray=this.food.myarray.filter(x=>x.name.includes(data));
   }
   deletefood(id:string)
   {
    const url='http://localhost:3000/Myfoods/' 
    this.http.delete(url+id).subscribe(()=>
    console.log())
   }

   pmenu:any []=this.food.menu;

}
