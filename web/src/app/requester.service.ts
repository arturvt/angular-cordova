import { Injectable } from '@angular/core';
import { timer, combineLatest } from 'rxjs';

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(2000, 4000);
const timerThree$ = timer(3000, 4000);

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  constructor() {}

  startCombine() {
    combineLatest(timerOne$, timerTwo$, timerThree$)
    .subscribe(([timerValOne, timerValTwo, timerValThree]) => {

      console.log(
        `Loop time...
        Timer One Latest: ${timerValOne},
        Timer Two Latest: ${timerValTwo},
        Timer Three Latest: ${timerValThree}`
        );
      });
    }
  }
