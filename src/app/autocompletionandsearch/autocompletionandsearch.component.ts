import { Component, OnInit } from '@angular/core';
import { errorContext } from 'rxjs/internal/util/errorContext';

import { AutocompletionService } from '../autocompletion.service';

@Component({
  selector: 'app-autocompletionandsearch',
  templateUrl: './autocompletionandsearch.component.html',
  styleUrls: ['./autocompletionandsearch.component.css'],
})
export class AutocompletionandsearchComponent implements OnInit {
  title = 'Akademia Angular - zadanie wstępne';
  lettersAndWords = this.autocompletionService.getAllLettersAndWords();
  actualLetter = '';
  actualText = undefined;
  actualAutoCompWords = undefined;

  constructor(private autocompletionService: AutocompletionService) {}

  ngOnInit(): void {}

  updateValue(e) {
    let valueFromTemplate = e.target.value;
    if (this.actualLetter === '') {
      this.actualLetter = valueFromTemplate;

      this.lettersAndWords.subscribe((value) => {
        this.actualAutoCompWords = value.find(
          (elem) => elem.letter === this.actualLetter
        );

        this.actualAutoCompWords = this.actualAutoCompWords.words;
      });
    } else if (valueFromTemplate === '') {
      this.actualLetter = '';
      this.actualAutoCompWords = undefined;
    }

    //this.actualText = valueFromTemplate;
    //this.actualAutoCompWords = this.actualAutoCompWords.find((el) =>el.startsWith(this.actualText));
  }

  onAutoCompletionClicked(e) {
    e.target.value = e.target.innerText;
    this.actualText = e.target.innerText;
    this.updateValue(e);
  }

  goToPage(websiteURL: string, args: string) {
    window.open(websiteURL + args.replace(/ /g, '+'), '_blank');
  }
}
