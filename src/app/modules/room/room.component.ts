import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LayoutappService } from 'src/app/helpers/Service/layout.service';
import { RoomService } from '../Service/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  animations: [
    trigger('animationsidebar', [
      state(
        'open',
        style({
          margin: '0px 0px 0px 0px',
          padding:'0px 30px 0px 0px',
        })
      ),
      state(
        'close',
        style({
          margin: '0px 0px 0px 200px',
          padding:'0px 0px 0px 30px',
        })
      ),
      transition('open<=>close', animate('.3s ease-in')),
    ]),
  ],
})
export class RoomComponent implements OnInit {
  responsiveOptions: any;
  rooms: any[] = [];
  constructor(private img:RoomService, public layoutservice: LayoutappService,) { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.allrooms();
  }

  allrooms() {
    this.img.roomApi().subscribe({
      next: (res: any) => {
        this.rooms = res;
        console.table(res);
      },
    });
  }
}
  


