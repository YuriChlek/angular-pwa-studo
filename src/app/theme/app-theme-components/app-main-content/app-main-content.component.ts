import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {AppHeaderComponent} from "../app-header/app-header.component";
import {AppFooterComponent} from "../app-footer/app-footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppFooterComponent
  ],
  templateUrl: './app-main-content.component.html',
  styleUrl: './app-main-content.component.scss'
})
export class AppMainContentComponent {
}
