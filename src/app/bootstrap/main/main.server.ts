import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from "../root/app.component";
import { config } from '../root/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
