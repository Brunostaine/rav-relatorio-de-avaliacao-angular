import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
      MatCardModule,
      BrowserAnimationsModule,
      BrowserModule,
      MatToolbarModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatButtonModule
  ]
})
export class AppMaterialModule { }
