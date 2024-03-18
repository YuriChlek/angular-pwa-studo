import { Component } from '@angular/core';
import { AppModuleMain } from "../../modules/app-main/app.module.main";
import { AppMainContentComponent } from "../../theme/app-theme/app-main-content/app-main-content.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModuleMain, AppMainContentComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Angular pwa app');
  }
}
