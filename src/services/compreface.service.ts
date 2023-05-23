import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComprefaceService {
   private comprefaceApiUrl = 'http://localhost:8000/api/v1/recognition/'; // L'URL de base de l'API Compreface
  httpClient: any;

  constructor(private http: HttpClient) { }
  

  getPhotoUrlBySubject(subject: string): Promise<string> {
    const apiUrl = `${this.comprefaceApiUrl}/users/${subject}/photo`; // Endpoint pour récupérer l'URL de la photo

    return this.http.get(apiUrl)
      .toPromise()
      .then((response: any) => {
        // Gérez la réponse de l'API et renvoyez l'URL de l'image
        return response.photoUrl;
      })
      .catch((error: any) => {
        // Gérez les erreurs de requête API
        throw new Error('Failed to get user photo from Compreface API.');
      });
  }

  getSubjectByPhotoUrl(photoUrl: string): Promise<string> {
    const apiUrl = `${this.comprefaceApiUrl}/photos/subject`; // Endpoint pour récupérer le subject à partir de l'URL de la photo

    return this.http.get(apiUrl, { params: { photoUrl } })
      .toPromise()
      .then((response: any) => {
        // Gérez la réponse de l'API et renvoyez le subject
        return response.subject;
      })
      .catch((error: any) => {
        // Gérez les erreurs de requête API
        throw new Error('Failed to get subject from Compreface API.');
      });
  }
}
