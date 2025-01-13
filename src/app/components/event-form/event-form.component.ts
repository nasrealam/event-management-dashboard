import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
})
export class EventFormComponent {
  constructor(private dialog: MatDialog) {}

  productPopUp(eventDetails: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: { eventData: eventDetails },
    });
  }
}
