import { Injectable, signal, effect } from '@angular/core';

import plantsData from '../data/plants.json';
import { PlantItem } from '../interfaces/plant-item.interface';

@Injectable({
  providedIn: 'root',
})
export class SimulatorService {
  private plants: any = (plantsData as any).default;

  temperature = signal({ value: 25 });
  sunlight = signal({ value: 8 });
  water = signal({ value: 0 });

  constructor() {
    effect(() => {
      console.log(`Temperature: ${this.temperature().value}`);
      console.log(`Sunlight: ${this.sunlight().value}`);
      console.log(`Water: ${this.water().value}`);
    });
  }

  onTemperatureChange(event: any): void {
    this.temperature.set({ value: event.target.value });
  }

  onSunlightChange(event: any): void {
    this.sunlight.set({ value: event.target.value });
  }

  onWaterChange(event: any): void {
    this.water.set({ value: event.target.value });
  }

  getPlantData(plantId: string): any {
    for (const category of this.plants.plants) {
      const foundPlant = category.items.find(
        (plant: PlantItem) => plant.id === plantId
      );
      if (foundPlant) {
        return foundPlant;
      }
    }

    console.error(`Plant with ID ${plantId} not found.`);
    return null;
  }
}
