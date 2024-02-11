import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminguardService } from '../adminguard.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  constructor(private routi:Router,private adminguard:AdminguardService){}

  admin:any={
    user:'Tapta',
    pwd:'password'
  }

  adminform=new FormGroup(
    {
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    }
  )

  get myuser()
  {
    return this.adminform.get('username')
  }
  get mypass()
  {
    return this.adminform.get('password')
  }

  adminlogin()
  {
    if(this.admin.user=='Tapta' && this.admin.pwd=='password')
    {
      this.routi.navigate(['main']);
    }
    this.adminguard.myvar(true);

  }
}
