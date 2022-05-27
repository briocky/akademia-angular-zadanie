import { Component, OnInit } from '@angular/core';

import { AutocompletionService } from '../autocompletion.service';

@Component({
  selector: 'app-autocompletionandsearch',
  templateUrl: './autocompletionandsearch.component.html',
  styleUrls: ['./autocompletionandsearch.component.css'],
})
export class AutocompletionandsearchComponent implements OnInit {
  title = 'Akademia Angular - zadanie wstępne';
  lettersAndWords = this.autocompletionService.getAllLettersAndWords();
  actualLetter = undefined;

  constructor(private autocompletionService: AutocompletionService) {
    console.log(this.autocompletionService.getAllLettersAndWords());
  }

  ngOnInit(): void {}

  updateValue(e) {
    let valueFromTemplate = e.target.value;
    if (this.actualLetter === undefined) {
      this.actualLetter = valueFromTemplate;
    } else if (
      valueFromTemplate === '' ||
      (valueFromTemplate === ' ' && this.actualLetter !== undefined)
    ) {
      this.actualLetter = undefined;
    }
  }
}
