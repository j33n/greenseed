import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PlantItem } from '../../../interfaces/plant-item.interface';

import plantsData from '../../../data/plants.json';

@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
})
export class PlantDetailComponent implements OnInit {
  plantId?: string;
  plant: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.plantId = id;
      this.getPlantById(this.plantId);
    } else {
      this.router.navigate(['/']);
    }
  }

  getPlantById(id: string): void {
    for (const category of plantsData.plants) {
      const foundPlant = category.items.find((p: PlantItem) => p.id === id);
      if (foundPlant) {
        this.plant = foundPlant;
        break;
      }
    }

    if (!this.plant) {
      console.error(`Plant with ID ${id} not found.`);
    }
  }
}
