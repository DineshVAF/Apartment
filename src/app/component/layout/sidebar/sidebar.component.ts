import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LayoutappService } from 'src/app/helpers/Service/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('animationsidebar', [
      state(
        'open',
        style({
          width:'0',
          margin: '0px',
          display:'none'
        })
      ),
      state(
        'close',
        style({
          margin: '0px',
          
        })
      ),
      transition('open<=>close', animate('.2s ease-in')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  constructor(public layoutservice: LayoutappService) { }

  ngOnInit(): void {
  }

}
