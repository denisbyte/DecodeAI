import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Ollama {
  private url = 'http://localhost:11434/api/chat';

  constructor(private http: HttpClient){

  }

  explainCode(code: string, langage: string): Observable<any>{
    const body = {
      model: 'stable-code:3b',
      messages: [
        {role: "system", content: "Tu est une IA capable d'expliquer du code simplement et clairement "},
        {role: 'user', content:`Explication du code:\n${code} suivant dans ce langage de programmation ${langage}`}

      ]
    };

    return this.http.post(this.url, body);
  }

  
}
