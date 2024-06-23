import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:"root"
})
export class Foodthings {
    constructor(private http:HttpClient){};
     backurl='https://backend-efms.vercel.app';
    myarray: any[] = [
      
    ];

    addarray(obj: any) {
        this.myarray.push(obj);

    }
    menu: any[] = [
        { Day: 'Monday', breakfast1: 'Luchi', breakfast2: 'Sandesh', breakfast3: 'Bhaja', lunch1: 'Chholar Dal', lunch2: 'Bhindi Bhaja', lunch3: 'Kosha Mangsho', dinner1: 'Macher Kalia', dinner2: 'Palong Shaak Bhaja', dinner3: 'Aloo Kumro Chenchki', common1: 'Chana Dal', common2: 'Roti', common3: 'Basmati Rice' },
        { Day: 'Tuesday', breakfast1: 'Pitha', breakfast2: 'Singara', breakfast3: 'Chai', lunch1: 'Murgir Jhol', lunch2: 'Aloo Dum', lunch3: 'Dhokar Dalna', dinner1: 'Chicken Bharta', dinner2: 'Niramish Alur Dom', dinner3: 'Echor Chingri', common1: 'Urad Dal', common2: ' Alur Paratha', common3: 'Jasmine Rice' },
        { Day: 'Wednessday', breakfast1: 'Kochuri', breakfast2: 'Mishti Doi', breakfast3: 'Jhalmuri', lunch1: 'Mochar Ghonto', lunch2: 'Alu Posto', lunch3: 'Ilish Bhapa', dinner1: 'Macher Dimer Bora Diye Jhol', dinner2: 'Kanchkolar Kofta Curry', dinner3: 'Dhokar Dalna', common1: 'Toor Dal', common2: 'Daal Paratha', common3: 'Arborio Rice' },
        { Day: 'Thrusday', breakfast1: 'Chholar Dal', breakfast2: 'Alur Torkari', breakfast3: 'Tomato Omelette', lunch1: 'Potoler Dorma', lunch2: 'Luchi Aloo Dum', lunch3: 'Chingri Malaikari ', dinner1: 'Chingri Bhapa', dinner2: 'Labra', dinner3: 'Daab Chingri ', common1: 'Masoor Dal', common2: 'Roti', common3: 'Brown Rice ' },
        { Day: 'Friday', breakfast1: 'Radhaballavi', breakfast2: 'Telebhaja', breakfast3: 'Ghugni', lunch1: 'Bhetki Paturi', lunch2: 'Shukto', lunch3: 'Doi Maach', dinner1: 'Murgir Jhol', dinner2: 'Sukto', dinner3: 'Kumro Phool Bhaja', common1: 'Urad Dal', common2: 'Sattu Paratha', common3: 'Arborio Rice' },
        { Day: 'Saturday', breakfast1: 'Panta Bhat', breakfast2: 'Shingara', breakfast3: 'Rasgulla', lunch1: 'Chanar Dalna', lunch2: 'Begun Bhaja', lunch3: 'Kosha Chicken', dinner1: 'Patla Murgir Jhol', dinner2: 'Potoler Dolma', dinner3: 'Kalaadi Bhaja', common1: 'Toor Dal', common2: 'Alu Paratha', common3: 'Brown Rice' },
        { Day: 'Sunday', breakfast1: 'Nolen Gur Pancake', breakfast2: 'Aloor Dum', breakfast3: 'Jalebi', lunch1: 'Jhinge Narkel Shorshe', lunch2: 'Aloo Phulkopi Dalna', lunch3: 'Mangshor Jhol', dinner1: 'Mangshor Jhol', dinner2: 'Aloo Peyaj Diye Maacher Jhol', dinner3: 'Doi Begun', common1: 'Chana Dal', common2: 'Roti', common3: 'Jasmine Rice' }
    ]


    getproducts()
    {
        const url=this.backurl+'/products';
        return this.http.get<any[]>(url);
    }


comingtocart()
{
    const url=this.backurl+'/addtocartitems';
    return this.http.get<any[]>(url);
    
}

}