import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    submit:boolean = false;
    showErrorMessage=false;

    constructor(private fb:FormBuilder , private loginService:LoginService , private router:Router){}

      loginForm = this.fb.group({

          email : ['',[Validators.required , Validators.email]],
          password : ['',[Validators.required]],

      })

      get f(){

        return this.loginForm.controls;

      }

      loginSubmit(){
        this.submit = true
         console.log("clicked");

         if(this.loginForm.valid){

            this.loginService.loginCheck(this.loginForm.value).subscribe((res:any)=>{

              console.log(res);

                if (res && res['data']['token']) {

                  console.log("login successfull");
                  localStorage.setItem('token' ,res['data']['token']);
                  this.router.navigate(['/userlist'])

                }else{
                    this.showErrorMessage=true;
                    this.router.navigate(['login']);

                }


            },(err)=>{

                 this.showErrorMessage=true;

            })

         }


      }

}
