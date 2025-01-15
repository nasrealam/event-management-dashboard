import { Component, OnInit } from '@angular/core';
import { AngularMaterialModule } from '../../module/angular-material/angular-material.module';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-dashboard',
  imports: [AngularMaterialModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  totalEvents: number = 0;
  nextUpcomingEvent: any = null;
  pieChartData: { name: string; value: number }[] = [];
  eventList: any[] = [];

  colorScheme: Color = {
    name: 'default',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#FF8C00', '#FFD700', '#8FBC8F'],
  };

  constructor(private srv: EventService) {}

  ngOnInit() {
    this.loadEventData();
  }

  loadEventData() {
    this.srv.getEventList().subscribe((data: any) => {
      this.eventList = data;

      // Total events
      this.totalEvents = this.eventList.length;

      // Count events by status
      const statusCounts: { [key: string]: number } = {
        ongoing: 0,
        upcoming: 0,
        completed: 0,
      };

      this.eventList.forEach((event) => {
        statusCounts[event.eventStatus]++;
      });

      this.pieChartData = [
        { name: 'Ongoing', value: statusCounts['ongoing'] },
        { name: 'Upcoming', value: statusCounts['upcoming'] },
        { name: 'Completed', value: statusCounts['completed'] },
      ];

      // Find next upcoming event
      const currentDate = new Date();
      this.nextUpcomingEvent = this.eventList
        .filter((event) => new Date(event.date) > currentDate)
        .sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )[0];
    });
  }
}
