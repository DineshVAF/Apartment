import { trigger, state, style, transition, animate } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { LayoutappService } from 'src/app/helpers/Service/layout.service';
import { ThemeService } from 'src/app/helpers/Service/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
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
          padding:'0px 30px 0px 30px'
        })
      ),
      transition('open<=>close', animate('.3s ease-in')),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  Shown: boolean = false;
  img: boolean = false;  
  elem: any;
  checked: boolean = false;
 
  constructor(@Inject(DOCUMENT) private document: any, public layoutservice: LayoutappService,private theme:ThemeService) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
  }
  toggleTheme() {
    this.theme.isToggle = !this.theme.isToggle;
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
    this.Shown = !this.Shown;
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
    this.Shown = !this.Shown;
  }
  toggle() {
    this.layoutservice.filterClicked();
    this.img = !this.img
  }
}




