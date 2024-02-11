import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../Services2/EmployeeDetails.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-accomodationrooms',
  templateUrl: './accomodationrooms.component.html',
  styleUrls: ['./accomodationrooms.component.css']
})
export class AccomodationroomsComponent {

  constructor(private details: EmployeeDetails, private http: HttpClient) { };

  rooms: any[] = [];


  ngOnInit(): void {


    this.details.accessjson().subscribe((arr) => {
      console.log('Tapta')
      console.log(arr);
      let temparr = arr.sort((a, b) => {
        const first = a.empid;
        const second = b.empid;
        if (first == second) {
          return 0;
        }
        else if (first > second) {
          return 1;
        }
        else {
          return -1;
        }

      })
      let updatearr = [];
      updatearr.push(temparr[0]);
      for (var i = 1; i < temparr.length; i++) {
        if (temparr[i].empid != temparr[i - 1].empid) {
          updatearr.push(temparr[i]);
        }

      }
      this.rooms = updatearr.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1
        }
        else if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;

        }
        else {
          return 0;
        }
      });

      // this.rooms=this.rooms.filter(val=>val.price==undefined)
      this.male = this.rooms.filter(x => x.gender == 'male').length;
      this.female = this.rooms.filter(x => x.gender == 'female').length;
      this.intern = this.rooms.filter(x => x.job.toLowerCase() == 'Intern'.toLowerCase()).length;
      this.middle = this.rooms.filter(x => x.accomodation == 'middle').length;
      this.upper = this.rooms.filter(x => x.accomodation == 'upper').length;
      this.super = this.rooms.filter(x => x.accomodation == 'super').length;
      this.mainarr=this.rooms;
      

    })
   

  }
mainarr:any[]=[];

  comingevent(search: string) {
var temparr=this.mainarr
    var myarr = temparr.filter((x) => {
      return x.name.toLowerCase().includes(search.toLowerCase()) ||
       x.gender.toLowerCase() == search.toLowerCase() ||
        x.job.toLowerCase().includes(search.toLowerCase()) ||
        x.empid.toString().includes(search.toLowerCase()) ||
        x.mob.toString().includes(search.toLowerCase()) ||
        x.email.toLowerCase().includes(search.toLowerCase()) ||
        x.accomodation.toLowerCase().includes(search.toLowerCase())
    }
    );

    this.rooms = myarr;

    

  }

  delete(id: string) {
    this.details.deleteobject(id);
  }

  male: number = 0;
  female: number = 0
  intern: number = 0;
  middle: number = 0;
  upper: number = 0;
  super: number = 0

}
