import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'

})
export class EmployeeDetails
{

    constructor(private http:HttpClient){ }


public accessjson()
{
    const url='http://localhost:3000/Employeeform';
  return  this.http.get<any[]>(url);
}

public deleteobject(id:string)
{
    const url='http://localhost:3000/Employeeform/';
    this.http.delete(url+id).subscribe(()=>
    {
        console.log();
    });
}






} 