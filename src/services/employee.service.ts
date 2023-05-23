import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getnbRetard() {
    throw new Error('Method not implemented.');
  }
  getEmployee(id: number) {
    throw new Error('Method not implemented.');
  }
  baseurl=environment.baseurl
  
  constructor(private httpClient:HttpClient) { }

  getusers():Observable<any>{
    return this.httpClient.get(this.baseurl+'utilisateurs')
  }
  addUser(utilisateur):Observable<any> {
    return this.httpClient.post(this.baseurl+'utilisateurs', utilisateur);
  }
  editEmployee(id:number ,utilisateur ): Observable<any> {
    return this.httpClient.put(this.baseurl+'utilisateurs/' +id,utilisateur) 
  }
  saveUsers(utilisateur) {
    return this.httpClient.post('utilisateurs', utilisateur);
  }
  getEmployeeByID(id: any): Observable<any> {
    return this.httpClient.get(this.baseurl+'utilisateurs/'  +id);
  }
  deleteUser(id:any){
    return this.httpClient.delete(this.baseurl+'utilisateurs/' + id);
  }
  editUser(id:any , utilisateur:any){
    return this.httpClient.put(this.baseurl+'utilisateurs/' + id , utilisateur)
  }
   getutilisateur():Observable<any>{
    return this.httpClient.get(this.baseurl+'utilisateurs/nombreTotal')
  }
  
//   getlogin(email: string, password: string) {
//     const url = `${this.baseurl}utilisateurs/login`;
//     let params = new HttpParams()
//       .set('email', email)
//       .set('password', password);
//       return this.httpClient.get<any>(url, null, { params });
//   }
}
