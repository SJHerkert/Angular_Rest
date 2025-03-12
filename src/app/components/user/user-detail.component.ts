import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ReqresService } from '../../services/reqres.service';
import { User } from '../../models/user';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-user-detail',
  imports: [RouterModule,NgIf,FormsModule, NoimagePipe],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})

export class UserDetailComponent implements OnInit {

  user:User= {
    id:0,
    first_name:'',
    last_name:'',
    avatar:''
  };

  constructor(private activatedRoute:ActivatedRoute, private reqresService:ReqresService, private router:Router){
    this.activatedRoute.params.subscribe((params)=>{
      reqresService.getUser(params['id'])
      .subscribe((res:User)=>this.user=res);
    })

  }

  save():void{
    this.reqresService.updateUser(this.user).
    subscribe(() => this.router.navigate(['users']));
  }

  ngOnInit(){

  }
    
  

}
