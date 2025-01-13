import { Component } from '@angular/core';

import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [AngularMaterialModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'event-management-dashboard';
}
