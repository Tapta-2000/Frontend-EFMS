import { Component, EventEmitter, Output, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmployeeDetails } from '../Services2/EmployeeDetails.service';

@Component({
  selector: 'app-commonsearch',
  templateUrl: './commonsearch.component.html',
  styleUrls: ['./commonsearch.component.css']
})
export class CommonsearchComponent {
  constructor(private empdetails:EmployeeDetails){};

  search:string=''
  searcharr:any[]=[];
ngOnInit():void
{
  this.empdetails.accessjson().subscribe((val)=>
  {
    console.log(val)
    console.log('check arr')
    this.searcharr=val;
    console.log(this.searcharr)
  })
}



  @Output()
  myevent:EventEmitter<string>=new EventEmitter<string>();

  

  
  

  searchfun()
  {
    

    

    this.myevent.emit(this.search);
  }
}
