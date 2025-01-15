import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../module/angular-material/angular-material.module';
import { EventService } from '../../services/event.service';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DeferBlockBehavior } from '@angular/core/testing';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule, AngularMaterialModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'], // Fixed plural name
})
export class EventListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'eventName',
    'date',
    'time',
    'eventStatus',
    'eventLocation',
    'action',
  ];
  eventLists = new MatTableDataSource<any>(); // Initialize with MatTableDataSource

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private srv: EventService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.srv.getEventList().subscribe((res: any) => {
      this.eventLists.data = res; // Populate data source
    });
  }

  // Function for deleting events
  deletEvent(id: any) {
    let obj = {
      next: (res: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Event has been deleted successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.refreshTable(); // Refresh table after deletion
      },
      error: (err: any) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error deleting event',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      complete: () => {},
    };

    this.srv.deleteEvent(id).subscribe(obj);
  }

  // Refresh table data
  private refreshTable() {
    this.srv.getEventList().subscribe((res: any) => {
      this.eventLists.data = res;
    });
  }

  ngAfterViewInit() {
    this.eventLists.paginator = this.paginator; // Assign paginator after view init
  }

  updateEvents(eventData: any) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { eventData: eventData },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getData();
    });
  }

  applyFilter(event: Event) {
    const input = event.target as HTMLInputElement; // Explicitly cast target to HTMLInputElement
    const filterValue = input?.value || ''; // Handle potential null or undefined values
    this.eventLists.filter = filterValue.trim().toLowerCase();

    console.log(this.eventLists.filter);

    if (this.eventLists.paginator) {
      this.eventLists.paginator.firstPage();
    }
  }
}
