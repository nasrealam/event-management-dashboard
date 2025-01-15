import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AngularMaterialModule } from '../../module/angular-material/angular-material.module';
import { EventService } from '../../services/event.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepickerToggle } from '@angular/material/datepicker';

import { DialogRef } from '@angular/cdk/dialog';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  NativeDateAdapter,
} from '@angular/material/core';

@Component({
  selector: 'app-dialog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent implements OnInit {
  eventList!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private srv: EventService,
    private dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA)
    public data: { eventData: any }
  ) {}

  ngOnInit(): void {
    if (this.data.eventData) {
      this.eventList = this.formBuilder.group({
        id: [this.data.eventData?.id || '', Validators.required],
        eventName: [this.data.eventData?.eventName || '', Validators.required],
        date: [this.data.eventData?.date || '', Validators.required],
        time: [this.data.eventData?.time || '', Validators.required],
        eventStatus: [
          this.data.eventData?.eventStatus || '',
          Validators.required,
        ],
        eventLocation: [
          this.data.eventData?.eventLocation || '',
          Validators.required,
        ],
      });
      this.eventList.patchValue(this.data.eventData);
    } else {
      this.eventList = this.formBuilder.group({
        eventName: ['', Validators.required],
        date: ['', Validators.required],
        time: ['', Validators.required],
        eventStatus: ['', Validators.required],
        eventLocation: ['', Validators.required],
      });
    }
  }

  // function for post event detail
  postEventList() {
    if (this.eventList.valid) {
      this.srv.postEventDetails(this.eventList.value).subscribe({
        next: (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Event has been Added Successfully!!',
            showConfirmButton: false,
            timer: 1500,
          });
          location.reload();
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops....',
            text: 'Something went wrong!',
          });
        },
      });
    }
  }

  // close the dialog

  close() {
    this.dialogRef.close(true);
  }

  // function for update the event
  updateEvent() {
    if (this.eventList.valid) {
      const eventId = this.eventList.get('id')?.value;
      console.log('testing value: ', eventId);
      console.log('event data value: ', this.data.eventData);

      this.srv.updateEvent(eventId, this.eventList.value).subscribe({
        next: (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Event has been Updated Successfully!!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.dialogRef.close(true);
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops....',
            text: 'Something went wrong during the update!',
          });
        },
      });
    }
  }
}
