import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventFormComponent } from './components/event-form/event-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/new', component: EventFormComponent },
  { path: 'events/edit/:id', component: EventFormComponent },
];
