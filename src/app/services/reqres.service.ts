import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { catchError, map, tap, } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ReqresService {  
 private apiUrl = 'api/users'; //Url to in-memory API
 httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

  constructor(private http: HttpClient) { }
  
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError<User[]>('getUsers',[]))
    );
  }

  getUser(id:number):Observable<User>{
    const url=`${this.apiUrl}/${id}`;
    
    return this.http.get<User>(url)
    .pipe(
      catchError(this.handleError<User>('getUser id=${id}'))
    );
  }

  updateUser(user:User):any{
    return this.http.put(this.apiUrl,user,this.httpOptions)
    .pipe
      (catchError(this.handleError<User>('updateUser'))
    );
  }

  addUser(user:User):Observable<User> {
    return this.http.post<User>(this.apiUrl,user,this.httpOptions)
    .pipe(
      catchError(this.handleError<User>('addUser'))
    );
  }

  deleteUser(user:User):Observable<User> {
    const url=`${this.apiUrl}/${user.id}`;

    return this.http.delete<User>(url, this.httpOptions)
    .pipe(
      catchError(this.handleError<User>('deleteUser id=${user.id'))
    );
  }

  private handleError<T>(operation ='operation',result?:T):any{
    return(error:any):Observable<T>=>{
      //TODO:send the error to remote logging infrastructure
      console.error(error);//log to console instead

      //let the app keep runnin by returning an empty result
      return of(result as T)
    };
  }

  

}
