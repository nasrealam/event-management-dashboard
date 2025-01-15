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
      });
    this.setInitialTheme();
  }

  // Toggle between Light and Dark Theme
  toggleTheme(): void {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }

  // Close the sidebar when clicking a button in mobile mode
  onSidebarButtonClick(drawer: any) {
    if (drawer) {
      drawer.close();
    }
  }

  // Set the initial theme (Light by default)
  private setInitialTheme(): void {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    }
  }
  // function for open the form dialog
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
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
