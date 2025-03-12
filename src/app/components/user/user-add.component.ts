import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-add',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {

  userForm:FormGroup;
  submitted=false;

constructor(private formBuilder:FormBuilder,private ReqresService:ReqresService,private router:Router){
  this.userForm = this.formBuilder.group({
    first_name:['',Validators.required],
    last_name:['',Validators.required]
  });
}

get f():any{return this.userForm.controls;}

onSubmit():void{
  this.submitted=true;
  if(this.userForm.invalid){
    return;
  }

  const avatar = 'assets/img/user.jpg'
  const first_name:string=this.f.first_name.value;
  const last_name:string=this.f.last_name.value;

  this.ReqresService.addUser({first_name,last_name,avatar}as User)
  .subscribe(() => this.router.navigate(['users']));
}

}
