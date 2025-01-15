import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../module/angular-material/angular-material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  imports: [AngularMaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  ngOnInit() {}
}
