import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { id } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  baseurl=environment.baseurl

  constructor(private httpClient:HttpClient) { }
  getpointages():Observable<any>{
    return this.httpClient.get(this.baseurl+'pointage/today')
  }
  getALLpointages(id:any):Observable<any>{
    return this.httpClient.get(this.baseurl+'pointage/ByUtilisateur/'+id)
  }
  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseurl+'pointage');
  }
  getPourcentageArrivesALHeure(horairesPredefinis:any) {
    return this.httpClient.get<number>(`${this.baseurl}/pointage/pourcentage-arrives-a-lheure`,{ params: { horairesPredefinis: horairesPredefinis.toString()}});
  }
  postImage( Subject : any ,file:any){
    const formData = new FormData();
    formData.append("file", file);
    //const headers = new HttpHeaders({ 'enctype': 'multipart/form-data' });
    return this.httpClient.post<any>(`http://localhost:8000/api/v1/recognition/faces?`+Subject,formData,{ params: { subject: Subject.toString()} ,headers:{"x-api-key":"7c0d643a-df9f-405d-a0ad-40aba7c5b24f"}});
  }

  getPourcentageRetards(horairesPredefinis: Date[]) {
    return this.httpClient.get<number>(`${this.baseurl}/pointage/pourcentage-retards`, { params: { horairesPredefinis: horairesPredefinis.toString() } });
  }

  getPourcentageForStatRetard(date) {
    return this.httpClient.get<any>(`${this.baseurl}demandeconges/pourcentageRetard/`+date );
  }
  getHorairesPredefinis() {
    return this.httpClient.get<Date[]>(`${this.baseurl}/pointage/horaires-predefinis`);
  }
  getnbRetard(){
    return this.httpClient.get(this.baseurl+'demandeconges/nbRetard');

  }
}




