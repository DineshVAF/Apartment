import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LayoutappService } from 'src/app/helpers/Service/layout.service';
import { DetailsService } from '../Service/details.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss'],
  animations: [
    trigger('animationsidebar', [
      state(
        'open',
        style({
          margin: '0px 0px 0px 0px',
          padding:'0px 30px 0px 30px',
        })
      ),
      state(
        'close',
        style({
          margin: '0px 0px 0px 200px',
          padding:'0px 30px 0px 30px',
        })
      ),
      transition('open<=>close', animate('.3s ease-in')),
    ]),
  ],
})
export class ApartmentDetailsComponent implements OnInit {

  constructor(public layoutservice: LayoutappService,private dash:DetailsService) { }

  ngOnInit(): void {
  }

}
