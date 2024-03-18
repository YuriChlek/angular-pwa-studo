import { Component } from '@angular/core';
import { AppModuleMain } from "../../modules/app-main-module/app.module.main";
import { AppMainContentComponent } from "../../theme/app-theme-components/app-main-content/app-main-content.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModuleMain, AppMainContentComponent, AppMainContentComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Angular pwa app');
  }
}
