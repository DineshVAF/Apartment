import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { LayoutappService } from 'src/app/helpers/Service/layout.service';


@Component({
  selector: 'app-room-design',
  templateUrl: './room-design.component.html',
  styleUrls: ['./room-design.component.scss'],
  animations: [
    trigger('animationsidebar', [
      state(
        'open',
        style({
          margin: '0px 0px 0px 0px',
          padding: '20px 30px 0px 30px'
        })
      ),
      state(
        'close',
        style({
          margin: '0px 0px 0px 200px',
          padding: '20px 30px 0px 30px'
        })
      ),
      transition('open<=>close', animate('.3s ease-in')),
    ]),
  ],
})
export class RoomDesignComponent implements OnInit {


  constructor(public layoutservice: LayoutappService) { }

  ngOnInit(): void {

  }
 details: any = [
    {
      "DateRecevied": "714",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    },
    {
      "DateRecevied": "715",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    },
    {
      "DateRecevied": "716",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,

    },
    {
      "DateRecevied": "717",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    },
    {
      "DateRecevied": "718",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,

    },
    {
      "DateRecevied": "719",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    },
    {
      "DateRecevied": "720",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    },
    {
      "DateRecevied": "721",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    },
    {
      "DateRecevied": "722",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    },
    {
      "DateRecevied": "723",
      "1_30MinData": 0.23,
      "2_30MinData": 0.16,
      "3_30MinData": 0.16,
      "4_30MinData": 0.13,
      "5_30MinData": 0.14,
      "6_30MinData": 0.12,
      "7_30MinData": 0.11,
      "8_30MinData": 0.08,
      "9_30MinData": 0.08,
      "10_30MinData": 0.13,
    }
  ];

}
