import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlantListComponent } from './components/plant-library/plant-list/plant-list.component';
import { PlantDetailComponent } from './components/plant-library/plant-detail/plant-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'plants', pathMatch: 'full' },
  { path: 'plants', component: PlantListComponent },
  { path: 'plant-detail/:id', component: PlantDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
