import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatTimepickerModule } from '@angular/material/timepicker';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    MatTimepickerModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    MatTimepickerModule,
  ],
})
export class AngularMaterialModule {
  static forRoot(): ModuleWithProviders<AngularMaterialModule> {
    return {
      ngModule: AngularMaterialModule,
      providers: [],
    };
  }
}
