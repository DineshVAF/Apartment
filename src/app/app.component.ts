import { Component } from '@angular/core';
import { ThemeService } from './helpers/Service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Apartment';
  isTheme: boolean = true;
  constructor(public themeservice:ThemeService){}
}
