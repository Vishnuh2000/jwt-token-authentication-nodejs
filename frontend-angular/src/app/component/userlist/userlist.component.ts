import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  user: any[] = [];

  constructor(private loginApi: LoginService, private crudServices: CrudService, private router: Router) { }



  ngOnInit() {

    if (localStorage.getItem('token')) {

      this.loginApi.getAllUserList(localStorage.getItem('token')).subscribe((res: any) => {

        if (res) {

          console.log("userlist");
          this.user = res;


        }

      })

    }

  }



  edit(id: any) {

    this.router.navigate([`/edit/${id}`]);
  }

  deleteItem(id: any) {

    if(localStorage.getItem('token')){

         localStorage.removeItem('token')
         this.router.navigate(['/login'])

    }

    this.crudServices.deleteData(id).subscribe((res: any) => {


      this.ngOnInit();


    })

  }



}
