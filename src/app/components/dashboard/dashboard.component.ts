import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../module/angular-material/angular-material.module';

@Component({
    selector: 'app-dashboard',
    imports: [AngularMaterialModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
