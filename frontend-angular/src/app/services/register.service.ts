import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterComponent } from '../component/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {




  constructor(private http:HttpClient) { }


   postRegistraion(data:any){

    return this.http.post("http://localhost:3000/register",data);

   }


}
