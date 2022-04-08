import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  exports: [
      MatCardModule,
      BrowserAnimationsModule,
      BrowserModule,
      MatToolbarModule,
      MatTableModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatButtonModule,
      MatInputModule,
      MatRadioModule
  ]
})
export class AppMaterialModule { }
