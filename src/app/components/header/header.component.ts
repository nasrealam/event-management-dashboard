import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AngularMaterialModule } from '../../module/angular-material/angular-material.module';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, AngularMaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private dialog: MatDialog, private route: Router) {}
  // function for open the form dialog
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  // navigate to the dashboard

  navigateToDash() {
    this.route.navigate(['/dashboard']);
  }
}
