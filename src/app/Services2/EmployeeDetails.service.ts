import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'

})
export class EmployeeDetails
{

    constructor(private http:HttpClient){ }
    backurl='https://backend-efms.vercel.app'


public accessjson()
{
    const url=this.backurl+'/Employeeform';
  return  this.http.get<any[]>(url);
}

public deleteobject(id:string)
{
    const url=this.backurl+'/Employeeform/';
    this.http.delete(url+id).subscribe(()=>
    {
        console.log();
    });
}






} 