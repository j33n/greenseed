import { Component } from '@angular/core';
import plantsData from '../../../data/plants.json';

@Component({
  selector: 'plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
})

export class PlantListComponent {
  plants = plantsData.plants;
}
