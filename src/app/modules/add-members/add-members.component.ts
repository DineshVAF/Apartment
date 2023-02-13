import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutappService } from 'src/app/helpers/Service/layout.service';




@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss'],
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
  providers: []
})
export class AddMembersComponent implements OnInit {
  activeIndex: number = 0;
  items: any = []
  memberform: any;
  constructor(public layoutservice: LayoutappService, private router: Router) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Personal',
        // command: (event: any) => {
        //   this.activeIndex = 0;
        //   this.members.add({
        //     severity: 'info',
        //     summary: 'First Step',
        //     detail: event.item.label,
        //   });
        // },
      },
      {
        label: 'Information',
        // command: (event: any) => {
        //   this.activeIndex = 1;
        //   this.members.add({
        //     severity: 'info',
        //     summary: 'Seat Selection',
        //     detail: event.item.label,
        //   });
        // },
      },
      {
        label: 'Details',
        // command: (event: any) => {
        //   this.activeIndex = 2;
        //   this.members.add({
        //     severity: 'info',
        //     summary: 'Pay with CC',
        //     detail: event.item.label,
        //   });
        // },
      },
      {
        label: 'Confirmation',
        // command: (event: any) => {
        //   this.activeIndex = 3;
        //   this.members.add({
        //     severity: 'info',
        //     summary: 'Last Step',
        //     detail: event.item.label,
        //   });
        // },
      },
    ];
    this.details();
  }

  details() {
    this.memberform = new FormGroup({
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'number': new FormControl('', [Validators.required]),
      'mobile': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required]),
      'aachor': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'district': new FormControl('', [Validators.required]),
      'state': new FormControl('', [Validators.required]),
    })
  }

  next(value: string) {
    switch (value) {
      case 'step1':
        this.activeIndex = 1;
        break;
      case 'step2':
        this.activeIndex = 2;
        break;
      case 'step3':
        this.activeIndex = 3;
        break;
    }
  }
}


