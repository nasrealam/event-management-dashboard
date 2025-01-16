import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AngularMaterialModule } from '../../module/angular-material/angular-material.module';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, AngularMaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobile: boolean = false;
  drawerMode: 'side' | 'over' = 'side';
  title = 'Event Management';

  constructor(
    private dialog: MatDialog,
    private route: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.drawerMode = this.isMobile ? 'over' : 'side';
      });
  }

  // Close the sidebar when clicking a button in mobile mode
  onSidebarButtonClick(drawer: any) {
    if (drawer) {
      drawer.close();
    }
  }

  // function for open the form dialog
  openDialog() {
    const isMobile = this.breakpointObserver.isMatched('(max-width: 768px)');

    this.dialog.open(DialogComponent, {
      width: isMobile ? '95%' : '50%',
      data: {},
    });
  }

  // navigate to the dashboard

  navigateToDash() {
    this.route.navigate(['/dashboard']);
  }
  navigateToEventList() {
    this.route.navigate(['/events']);
  }
}
