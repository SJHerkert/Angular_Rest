import { Component } from '@angular/core';
import { User } from '../../models/user';
import { ReqresService } from '../../services/reqres.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingComponent } from "../shared/loading/loading.component";
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoadingComponent, NoimagePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
    
  users:User[] =[];
  loading:boolean=false;
 
  //Inject the service into the constructor
  constructor(private reqresService: ReqresService,private router:Router) {
    this.getUsers();
  }

  //Rewriting the function to output the data(array/list)
  //Method that gets a list of users using the service
  //This function Logs the mockup data
  getUsers() {
    this.loading=true;

    this.reqresService.getUsers().subscribe(
      (res: User[]) => {
        this.users=res;
        this.loading=false;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  userDetails( id: number ){   
    this.router.navigate( ['user',id] );
   }

  addUser():void{
    this.router.navigate(['add']);
  }

  deleteUser(user:any){
    this.users=this.users.filter(u=>u!==user);
    this.reqresService.deleteUser(user).subscribe();
  }

  //Method that gets a list of users using the service
  //This function Logs the mockup data
  // getUsers() {
  //   this.reqresService.getUsers().subscribe(
  //     (res: User[]) => {
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }


}
