import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  isBoolean: boolean = false;
  constructor() { }

  filterClicked() {
    this.isBoolean = !this.isBoolean;
  }
}
