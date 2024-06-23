import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private http:HttpClient ){

    this.feedobj={
      first:'',
      second:'',
      third:'',
      fourth:'',
      fifth:'',
      sixth:'',
      seventh:'',
      eighth:'',
      nineth:'',
      tenth:''
    }
  }
feedobj:any={}
  row1:boolean=true;
  yes1:boolean=true;
  no1:boolean=true;
  row2:boolean=false;
  yes2:boolean=true;
  no2:boolean=true;
  row11()
  {
    this.no1=false;
    this.row2=true;
    this.feedobj.first='-YES'
  }
  row12()
  {
    this.yes1=false;
    this.row2=true;
    this.feedobj.first='-NO'
  }

  row3:boolean=false;
  yes3:boolean=true;
  no3:boolean=true;

  row21()
  {
    this.no2=false;
    this.row3=true;
    this.feedobj.second='-YES'
  }
  row22()
  {
    this.yes2=false;
    this.row3=true;
    this.feedobj.second='-NO'
  }

  row4:boolean=false;
  yes4:boolean=true;
  no4:boolean=true;

  row31()
  {
    this.no3=false;
    this.row4=true;
    this.feedobj.third='-YES'
  }
  row32()
  {
    this.yes3=false;
    this.row4=true;
    this.feedobj.third='-NO'
  }

  row5:boolean=false;
  yes5:boolean=true;
  no5:boolean=true;

  row41()
  {
    this.no4=false;
    this.row5=true;
    this.feedobj.fourth='-YES'
  }
  row42()
  {
    this.yes4=false;
    this.row5=true;
    this.feedobj.fourth='-NO'
  }

  row6:boolean=false;
  yes6:boolean=true;
  no6:boolean=true;

  row51()
  {
    this.no5=false;
    this.row6=true;
    this.feedobj.fifth='-YES'
  }
  row52()
  {
    this.yes5=false;
    this.row6=true;
    this.feedobj.fifth='-NO'
  }

  row7:boolean=false;
  yes7:boolean=true;
  no7:boolean=true;

  row61()
  {
    this.no6=false;
    this.row7=true;
    this.feedobj.sixth='-YES'
  }
  row62()
  {
    this.yes6=false;
    this.row7=true;
    this.feedobj.sixth='-NO'
  }

  row8:boolean=false;
  yes8:boolean=true;
  no8:boolean=true;

  row71()
  {
    this.no7=false;
    this.row8=true;
    this.feedobj.seventh='-YES'
  }
  row72()
  {
    this.yes7=false;
    this.row8=true;
    this.feedobj.seventh='-NO'
  }

  row9:boolean=false;
  yes9:boolean=true;
  no9:boolean=true;

  row81()
  {
    this.no8=false;
    this.row9=true;
    this.feedobj.eighth='-YES'
  }
  row82()
  {
    this.yes8=false;
    this.row9=true;
    this.feedobj.eighth='-NO'
  }

  row10:boolean=false;
  yes10:boolean=true;
  no10:boolean=true;

  row91()
  {
    this.no9=false;
    this.row10=true;
    this.feedobj.nineth='-YES'
  }
  row92()
  {
    this.yes9=false;
    this.row10=true;
    this.feedobj.nineth='-NO'
  }
 submit:boolean=false;
  row101()
  {
    this.no10=false;
    this.feedobj.tenth='-YES'
    this.submit=true;
    
  }
  row102()
  {
    this.yes10=false;
    this.feedobj.tenth='-NO'
    this.submit=true;
   
  }

  
  
 backurl='https://backend-efms.vercel.app';
onfeedsubmit()
{

 const myfeedback={
    one:`1. Are you satisfied with the quality of the accommodation provided by the company ${this.feedobj.first}`  ,
    two:`2. would you give rating the cleanliness and maintenance of the accommodation ${this.feedobj.second} `,
    third:'3. Are the amenities provided in the accommodation sufficient for your needs '+this.feedobj.third,
    four:'4. Do you feel that the company provides a safe and secure environment for its employees '+this.feedobj.fourth,
    five:'5. Are you satisfied with the food quality and variety in the canteen '+this.feedobj.fifth,
    six:'6. Is the canteen clean and well-maintained '+this.feedobj.sixth,
    seven:'7. Are there any specific food items that you would like to see included in the canteen menu'+this.feedobj.seventh,
    eight:'8. Are you satisfied with the transportation facilities provided by the company'+this.feedobj.eighth,
    nine:'9. Are the transportation timings and routes convenient for you'+this.feedobj.nineth,
    ten:'10. Is the company transportation service reliable and punctual '+this.feedobj.tenth
  }

  console.log("check feedback")
  
  console.log(this.feedobj);
  this.http.post(this.backurl+'/feedback',myfeedback).subscribe((val)=>{
    console.log(val);
   
   
  })
  alert('Data submitted Successfully');

}

}
