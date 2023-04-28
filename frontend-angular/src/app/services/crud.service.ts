import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getUserById(id:any){

    return this.http.get<any>(`http://localhost:3000/edit/${id}`);

  }

  updateData(userdata:any,id:any){

    return this.http.put(`http://localhost:3000/update/${id}`,userdata);

  }

  deleteData(id:any){

    return this.http.delete<any>(`http://localhost:3000/delete/${id}`);

  }

}
