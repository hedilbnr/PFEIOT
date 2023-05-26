import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  
  
  
  getConge(id: number) {
    throw new Error('Method not implemented.');
  }

  baseurl=environment.baseurl
  constructor(private httpClient:HttpClient) { }
  getnbPresent():Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/nbPresent')
  }
  getnbConge():Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/countConge')
  }
  getEvennement():Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges')
  }
  getEtatConge(): Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/etat')
  }
  editConge(id:number ,demandeconge :any ):Observable<any>{
    return this.httpClient.put(this.baseurl+'demandeconges/etat/' +id , demandeconge)

  }
  // deleteConge(id: number): Observable<void> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.httpClient.delete<void>(url);
  // }
  deleteConge(id:number):Observable<any>{
    return this.httpClient.delete(this.baseurl+'demandeconges/'+id)
  }
  

  // addConge(conge: any): Observable<any> {
  //   return this.httpClient.post(this.baseurl + 'demandeconges/', conge);
  // }
  // addConge(conge: any, id: number): Observable<any> {
  //   const url = `${this.baseurl}demandeconges/${id}`;
  //   return this.httpClient.post(url, conge);
  // }
  addConge(conge: any, employeeId: number): Observable<any> {
    return this.httpClient.post(this.baseurl + 'demandeconges/' + employeeId, conge);
  }
  getPourcentage():Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/pourcentage')
  }
  getPourcentageRetard():Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/pourcentageRetard')
  }
  

}
