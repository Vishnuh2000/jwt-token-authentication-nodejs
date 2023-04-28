import { Component } from '@angular/core';
import {Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{


  submit:boolean = false;
  emailExits:any;

    constructor(private fb:FormBuilder , private registraionService:RegisterService , private router:Router){}

      regForm = this.fb.group({

        name:['',[Validators.required]],
        username:['',[Validators.required]],
        phoneNumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
        email:['',[Validators.required , Validators.email]],
        password:['',[Validators.required , Validators.min(8)]]

      });

      get f(){

         return this.regForm.controls;

      }


      validation:boolean = false;

      onSubmit(){

        this.submit=true
        console.log('clicked')
        console.log('f',this.f);

        if(this.regForm.valid){

             this.registraionService.postRegistraion(this.regForm.value).subscribe((res:any)=>{


                 if(res){

                      this.router.navigate(['/login'])

                 }else if (res['email']=this.regForm.value.email){
                     
                     this.emailExits = res.status;

                     this.router.navigate(['/register'])

                 }


             })

        }


      }




}
