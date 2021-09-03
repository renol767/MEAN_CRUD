import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { DataDetailComponent } from './components/data-detail/data-detail.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDataComponent,
    DataDetailComponent,
    DataListComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Data Tables Module
    DataTablesModule,
    // Import Http CLient Module
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
