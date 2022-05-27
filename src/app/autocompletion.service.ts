import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AutocompletionService {
  constructor(private http: HttpClient) {}

  getAllLettersAndWords() {
    return this.http.get<{ letter: string; words: string[] }[]>(
      '/assets/phrases.json'
    );
  }
}
