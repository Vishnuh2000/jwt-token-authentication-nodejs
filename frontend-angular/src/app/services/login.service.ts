import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


    loginCheck(data:any){

       return this.http.post("http://localhost:3000/login",data);

    }

     getAllUserList(token:any){

         const header = new HttpHeaders({

            'Content-Type' : "application/json",
            'Authorization' : `Bearer ${token}`

         })

         return this.http.get("http://localhost:3000/geAllUsers",{headers:header})

     }


}
