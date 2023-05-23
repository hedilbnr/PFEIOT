import { Component } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-face-recognition',
  templateUrl: './face-recognition.component.html',
  styleUrls: ['./face-recognition.component.css']
})
export class FaceRecognitionComponent {
  recognizedFaces: any[] = [];

  constructor() { }

  recognizeFaces() {
    // Appel vers votre serveur Python
    axios.get('http://localhost:5000/app')
      .then((response) => {
        // Récupérer les résultats de reconnaissance faciale depuis la réponse
        this.recognizedFaces = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
