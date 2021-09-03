import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Component
import { DataListComponent } from './components/data-list/data-list.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { DataDetailComponent } from './components/data-detail/data-detail.component';
import { DataComponent } from './components/data/data.component';

// Create Route for Component
const routes: Routes = [
  { path: 'data-list', component: DataListComponent },
  { path: 'add-data', component: AddDataComponent },
  { path: 'edit-data/:id', component: DataDetailComponent },
  { path: '', component: DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
