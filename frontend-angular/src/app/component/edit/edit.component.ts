import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{


  submit: boolean = false;

  editForm = this.fb.group({

    name:[''],
    username:[''],
    phoneNumber:[''],
    email:[''],

  });
  
  id:any;

  constructor(private fb: FormBuilder, private crudService:CrudService, private router: Router , private route:ActivatedRoute) { }
  ngOnInit(): void {

    this.id= this.route.snapshot.paramMap.get('id');

    this.crudService.getUserById(this.id).subscribe((res:any)=>{

        console.log({res});

        this.editForm = this.fb.group({

          name:[res['name']],
          username:[res['username']],
          phoneNumber:[res['phoneNumber']],
          email:[res['email']],
      
        });

      })

  }

  

  onSubmit() {

    this.submit = true
    console.log('clicked')
    //console.log('f', this.f);
      
    if(this.id){

        this.crudService.updateData(this.editForm.value,this.id).subscribe((res:any)=>{

             console.log('updated value:',res);
             
             if(res){

                 this.router.navigate(['userlist']);

             }

        })

    }
     

  }
}
