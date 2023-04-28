import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {



  loggedIn:any = localStorage.getItem('token');
  
    authUser:any
  
  constructor(private router:Router){} 

 

  logout(){

      localStorage.removeItem('token')
      this.router.navigate(['/'])

  }


}
