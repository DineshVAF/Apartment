import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LayoutappService } from 'src/app/helpers/Service/layout.service';
import { MembersService } from '../Service/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  animations: [
    trigger('animationsidebar', [
      state(
        'open',
        style({
          margin: '0px 0px 0px 0px',
          padding:'0px 0px 0px 30px'
        })
      ),
      state(
        'close',
        style({
          margin: '0px 0px 0px 200px',
          padding:'10px 30px 0px 30px'
        })
      ),
      transition('open<=>close', animate('.3s ease-in')),
    ]),
  ],
})
export class MembersComponent implements OnInit {
  apartment: any[]=[];

  constructor(private apart: MembersService,public layoutservice: LayoutappService) { }

  ngOnInit(): void {
    this.Apartment();
  }

  Apartment() {
    this.apart.memberDetails().subscribe({
      next: (res: any) => {
        this.apartment = res;
        console.table(res);
      },
    });
  }
}
