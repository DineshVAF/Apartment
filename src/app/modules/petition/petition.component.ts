import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { LayoutappService } from 'src/app/helpers/Service/layout.service';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss'],
  animations: [
    trigger('animationsidebar', [
      state(
        'open',
        style({
          margin: '0px 0px 0px 0px',
          padding: '0px 20px 0px 20px',
        })
      ),
      state(
        'close',
        style({
          margin: '0px 0px 0px 200px',
          padding: '0px 20px 0px 30px',
        })
      ),
      transition('open<=>close', animate('.3s ease-in')),
    ]),
  ],
})
export class PetitionComponent implements OnInit {
  showTabs!: { one: boolean; two: boolean; };
  

  constructor(public layoutservice: LayoutappService,) { }

  ngOnInit(): void {
    this.showTabs = {
      "one": true,
      "two": true,
  }

}
}
