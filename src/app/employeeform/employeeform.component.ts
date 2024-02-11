import { Component ,OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from '../Services2/EmployeeDetails.service';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {

  constructor(private http:HttpClient,private myemployee:EmployeeDetails){}
  myemployeearr:any[]=[];


  ngOnInit():void{
    this.http.get<any[]>('http://localhost:3000/Employeeform').subscribe((val)=>
    {
      console.log(val);
    })
    this.myemployee.accessjson().subscribe((arr)=>
    {
      this.myemployeearr=arr;

    })
  }

  reactiveform = new FormGroup(
    {
      name: new FormControl(null),
      empid: new FormControl(null),
      mob: new FormControl(null),
      email: new FormControl(null),
      job: new FormControl(null),
      gender: new FormControl(null),
      monday: new FormControl(null),
      tuesday: new FormControl(null),
      wednesday: new FormControl(null),
      thrusday: new FormControl(null),
      friday: new FormControl(null),
      saturday: new FormControl(null),
      sunday: new FormControl(null),
      city: new FormControl("1"),
      state: new FormControl("1"),
      pincode: new FormControl("null"),
      accomodation: new FormControl("null"),
      morning: new FormControl("null"),
      evening: new FormControl("null"),

      
      textarea: new FormControl(null, Validators.required)


    }
  );

 

  empdetails: any = {
    

    name: '',
    empid: '',
    mob: '',
    email: '',
    job: '',

    city: '',
    state: '',
    pincode: '',
    textarea:'',
    address: '',
    gender: '',
    monday: "",
    tuesday: "",
    wednesday: "",
    thrusday: "",
    friday: "",
    saturday: "",
    sunday: "",
    accomodation:'',
    morning:'',
    evening:''

  }
  

  

  // radi: string = 'off';
  // monday: string = "nonveg";
  // tuesday: string = "nonveg";
  // wednesday: string = "nonveg";
  // thrusday: string = "nonveg";
  // friday: string = "nonveg";
  // saturday: string = "nonveg";
  // sunday: string = "nonveg";

  onreset() {
    this.reactiveform = new FormGroup(
      {
       
        name: new FormControl(null),
        empid: new FormControl(null),
        mob: new FormControl(null),
        email: new FormControl(null),
        job: new FormControl(null),
        gender: new FormControl(null),
        monday: new FormControl(null),
        tuesday: new FormControl(null),
        wednesday: new FormControl(null),
        thrusday: new FormControl(null),
        friday: new FormControl(null),
        saturday: new FormControl(null),
        sunday: new FormControl(null),
        city: new FormControl("1"),
        state: new FormControl("1"),
        pincode: new FormControl("null"),
        accomodation: new FormControl("null"),
        morning: new FormControl("null"),
        evening: new FormControl("null"),
  
        
        textarea: new FormControl(null, Validators.required)
  
  
      }
    );
  }


  onSubmit() {
    console.log(this.reactiveform);
    const myobj=this.empdetails;
    this.http.post('http://localhost:3000/Employeeform',this.empdetails).subscribe((val)=>
    {
      console.log(val);
    });
   
this.onreset();
   
  }

  
 


  get name() {
    return this.reactiveform.get('name');
  }
 
  get empid() {
    return this.reactiveform.get('empid');
  }
  get mobile() {
    return this.reactiveform.get('mob');
  }
  get emailid() {
    return this.reactiveform.get('email');
  }
  get job() {
    return this.reactiveform.get('job');
  }
  get pincode() {
    return this.reactiveform.get('pincode');
  }
  get textarea() {
    return this.reactiveform.get('textarea');
  }

  
}
