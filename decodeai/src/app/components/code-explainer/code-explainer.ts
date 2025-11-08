import { Component } from '@angular/core';
import { Ollama } from '../../services/ollama';

@Component({
  selector: 'app-code-explainer',
  imports: [],
  templateUrl: './code-explainer.html',
  styleUrl: './code-explainer.css',
})
export class CodeExplainer {
  code = ''; // le code saisi par l'utilisateur
  explanation = ''; // La gégéré par ollama
  language = 'Python'; //Langage selectionné par défaut
  loading = false; // Indicateur de chargement initialisé à false par défaut

  constructor(private ollama: Ollama){  }

  onExplain() {
    if(!this.code.trim()){
      return;
    }

    this.loading = true;
    this.explanation = '';

    // Appel du service ollama(requete post à l'API)
    this.ollama.explainCode(this.code, this.language).subscribe({

      // Succes
      next : (response) => {
        if(response?.messages?.content){
          this.explanation = this.explanation + response.messages.content;
        }

        this.loading = false;
      },
      error :() => {
        this.explanation = "Impossible de contacter le service Ollama";
        this.loading = false;
      }

    })
  }


}
