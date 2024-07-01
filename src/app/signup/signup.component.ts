import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators, FormControlName} from '@angular/forms'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private http:HttpClient){}


  hexCode: string = 'ABCDEF0123456789';
  binaryCode: string = BigInt('0x' + this.hexCode).toString(2);


  firstpart: string = this.binaryCode.slice(0, 16);
  secondpart: string = this.binaryCode.slice(16, 32);
  thirdpart: string = this.binaryCode.slice(32, 48);
  fourthpart: string = this.binaryCode.slice(48, 64);

  mrx(data: string) {
    var res = '';
    switch (data) {
      case '0000':
        res = '0011';
        break
      case '0001':
        res = '1111';
        break
      case '0010':
        res = '1110';
        break
      case '0011':
        res = '0000';
        break
      case '0100':
        res = '0101';
        break
      case '0101':
        res = '0100';
        break
      case '0110':
        res = '1011';
        break
      case '0111':
        res = '1100';
        break
      case '1000':
        res = '1101';
        break
      case '1001':
        res = '1010';
        break
      case '1010':
        res = '1001';
        break
      case '1011':
        res = '0110';
        break
      case '1100':
        res = '0111';
        break
      case '1101':
        res = '1000';
        break
      case '1110':
        res = '0010';
        break
      case '1111':
        res = '0001';
        break

    }
    return res;


  }
  mry(data: string) {
    var res = '';
    switch (data) {
      case '0000':
        res = '1001';
        break
      case '0001':
        res = '1110';
        break
      case '0010':
        res = '0101';
        break
      case '0011':
        res = '0110';
        break
      case '0100':
        res = '1010';
        break
      case '0101':
        res = '0010';
        break
      case '0110':
        res = '0011';
        break
      case '0111':
        res = '1100';
        break
      case '1000':
        res = '1111';
        break
      case '1001':
        res = '0000';
        break
      case '1010':
        res = '0100';
        break
      case '1011':
        res = '1101';
        break
      case '1100':
        res = '0111';
        break
      case '1101':
        res = '1011';
        break
      case '1110':
        res = '0001';
        break
      case '1111':
        res = '1000';
        break

    }
    return res;


  }
  // this is my f function in which 16 digit binary will be input and it will change to another 1 digit
  alternate16digit(code: string) {
    const firstsubpart = code.slice(0, 4)
    const secondsubpart = code.slice(4, 8)
    const thirdsubpart = code.slice(8, 12)
    const fourthsubpart = code.slice(12, 16)

    const newmatrix: any[][] = new Array(10);

    for (var i = 0; i < 10; i++) {
      newmatrix[i] = [];
    }
    newmatrix[0][0] = this.mrx(firstsubpart);
    newmatrix[0][1] = this.mry(secondsubpart);
    newmatrix[0][2] = this.mrx(thirdsubpart);
    newmatrix[0][3] = this.mry(fourthsubpart);

    newmatrix[1][0] = newmatrix[0][0].slice(0, 2)
    newmatrix[1][1] = newmatrix[0][0].slice(2, 4)
    newmatrix[1][2] = newmatrix[0][1].slice(0, 2)
    newmatrix[1][3] = newmatrix[0][1].slice(2, 4)
    newmatrix[2][0] = newmatrix[0][2].slice(0, 2)
    newmatrix[2][1] = newmatrix[0][2].slice(2, 4)
    newmatrix[2][2] = newmatrix[0][3].slice(0, 2)
    newmatrix[2][3] = newmatrix[0][3].slice(2, 4)

    newmatrix[3][0] = newmatrix[1][0] + newmatrix[1][2];
    newmatrix[3][1] = newmatrix[1][1] + newmatrix[2][0];
    newmatrix[3][2] = newmatrix[1][3] + newmatrix[2][2];
    newmatrix[3][3] = newmatrix[2][1] + newmatrix[2][3];


    newmatrix[4][0] = this.mry(newmatrix[3][0]);
    newmatrix[4][1] = this.mrx(newmatrix[3][1]);
    newmatrix[4][2] = this.mry(newmatrix[3][2]);
    newmatrix[4][3] = this.mrx(newmatrix[3][3]);


    newmatrix[5][0] = newmatrix[4][0].slice(0, 2)
    newmatrix[5][1] = newmatrix[4][0].slice(2, 4)
    newmatrix[5][2] = newmatrix[4][1].slice(0, 2)
    newmatrix[5][3] = newmatrix[4][1].slice(2, 4)
    newmatrix[6][0] = newmatrix[4][2].slice(0, 2)
    newmatrix[6][1] = newmatrix[4][2].slice(2, 4)
    newmatrix[6][2] = newmatrix[4][3].slice(0, 2)
    newmatrix[6][3] = newmatrix[4][3].slice(2, 4)


    newmatrix[7][0] = newmatrix[5][0] + newmatrix[5][2];
    newmatrix[7][1] = newmatrix[5][1] + newmatrix[6][0];
    newmatrix[7][2] = newmatrix[5][3] + newmatrix[6][2];
    newmatrix[7][3] = newmatrix[6][1] + newmatrix[6][3];


    newmatrix[8][0] = this.mrx(newmatrix[7][0]);
    newmatrix[8][1] = this.mry(newmatrix[7][1]);
    newmatrix[8][2] = this.mrx(newmatrix[7][2]);
    newmatrix[8][3] = this.mry(newmatrix[7][3]);

    const key = newmatrix[8][0] + newmatrix[8][1] + newmatrix[8][2] + newmatrix[8][3]



    return key;



  }




  // Final key generated stored in key1,key2,key3,key4,key5

  key1: string = ''
  key2: string = ''
  key3: string = ''
  key4: string = ''
  key5: string = ''


  // password encryption started


   passwordToBinary(email: string): string {
    let binaryCode = '';
    for (let i = 0; i < email.length; i++) {
      // Convert character to ASCII value
      const asciiValue = email.charCodeAt(i);
  
      // Convert ASCII value to 8-bit binary representation
      const binaryValue = asciiValue.toString(2).padStart(7, '0');
  
      // Append the binary representation to the result
      binaryCode += binaryValue;
    }
  
    // Pad the binary code with zeros to make it 64 bits long
    binaryCode = binaryCode.padEnd(64, '0');
  
    return binaryCode;
  }
  

  

  



  // ------------------------------

  ngOnInit(): void {

    

    this.key1 = this.alternate16digit(this.firstpart)
    this.key2 = this.alternate16digit(this.secondpart)
    this.key3 = this.alternate16digit(this.thirdpart)
    this.key4 = this.alternate16digit(this.fourthpart)
    const temp1=parseInt(this.key1,2)
    const temp2=parseInt(this.key2,2)
    const tempxor1=temp1 ^ temp2;
    const temp3=parseInt(this.key3,2)
    const temp4=parseInt(this.key4,2)
    const tempxor2=temp3 ^ temp4;
    const finalxor=tempxor1 ^ tempxor2
    this.key5=finalxor.toString(2);

  

   
  

  }


passwordencryption(password:string)
{

  
  let newbinaryCode= this.passwordToBinary(password);
    
  const binarylength=newbinaryCode.length;
  console.log(newbinaryCode.length)
  let x=binarylength%4
  if(x > 0)
  {
    let y=4-x;
    for(var i=0;i<y;i++)
    {
      newbinaryCode+='0'
    }

  }
 
  
  
  const by4=newbinaryCode.length/4


let firstvar=newbinaryCode.slice(0,by4);
let secondvar=newbinaryCode.slice(by4,by4*2);
let thirdvar=newbinaryCode.slice(by4*2,by4*3);
let fourthvar=newbinaryCode.slice(by4*3,by4*4);

for(var k=0;k<5;k++)
{
  // select key
  let key='';
  if(k===0)
  {
    key=this.key1;
  }
  else if(k===1)
  {
    key=this.key2;
  }
  else if(k===2)
  {
    key=this.key3;
  }
  else if(k===3)
  {
    key=this.key4;
  }
  else if(k===4)
  {
    key=this.key5;
  }

  //key selected
  let encryptmatrix:number[][]=new Array(3);
  for(var i=0;i<3;i++)
  {
    encryptmatrix[i]=[]
  }
  encryptmatrix[0][0]=parseInt(firstvar,2);
  encryptmatrix[0][1]=parseInt(secondvar,2);
  encryptmatrix[0][2]=parseInt(thirdvar,2);
  encryptmatrix[0][3]=parseInt(fourthvar,2);

  let encryptkey:number=parseInt(key,2);
  

  encryptmatrix[1][0]= ~(encryptmatrix[0][0] ^ encryptkey);

  encryptmatrix[1][1]=parseInt(this.alternate16digit(encryptmatrix[1][0].toString(2)),2) ^ encryptmatrix[0][2];


  encryptmatrix[1][3]=~(encryptmatrix[0][3] ^ encryptkey);

  encryptmatrix[1][2]=parseInt(this.alternate16digit(encryptmatrix[1][3].toString(2)),2) ^ encryptmatrix[0][1];

  encryptmatrix[2][0]=encryptmatrix[1][1];
  encryptmatrix[2][1]=encryptmatrix[1][0];

  encryptmatrix[2][2]=encryptmatrix[1][3];
  encryptmatrix[2][3]=encryptmatrix[1][2];

  firstvar=encryptmatrix[2][0].toString(2);
  secondvar=encryptmatrix[2][1].toString(2);
  thirdvar=encryptmatrix[2][2].toString(2);
  fourthvar=encryptmatrix[2][3].toString(2);



}

let newpassword=firstvar+secondvar+thirdvar+fourthvar;
newpassword=newpassword.padEnd(64,'0')
return newpassword;


}













  registration:any={
    firstname:'',
    lastname:'',
    email:'',
    password:''
  };

  signupval=new FormGroup({
    fname:new FormControl(null,[Validators.required]),
    lname:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    pass:new FormControl(null,[Validators.required])


  })

  get fname()
  {
    return this.signupval.get('fname');
  }
  get lname()
  {
    return this.signupval.get('lname');
  }
  get myemail()
  {
    return this.signupval.get('email');
  }
  get password()
  {
    return this.signupval.get('pass');
  }

  myarr:any[]=[];
  backurl='https://backend-efms.vercel.app';

  onsubmit()
  {
    this.myarr.push(this.registration);
  
   this.registration.password= this.passwordencryption(this.registration.password)

   this.http.post(this.backurl+'/Signin',this.registration).subscribe((val)=>
   {
     console.log(val);
     console.log(this.backurl);
   })
   
  
    
  }

}
