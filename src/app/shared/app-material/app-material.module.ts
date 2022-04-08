import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
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
      MatTableModule
  ]
})
export class AppMaterialModule { }
