import { Component, effect } from '@angular/core';

import { SimulatorService } from '../../../services/simulator.service';
import { ActivatedRoute } from '@angular/router';

import plantsData from '../../../data/plants.json';
import { PlantItem } from 'src/app/interfaces/plant-item.interface';

const treeColors = {
  darkGreen: 'rgb(0, 100, 0)',
  forestGreen: 'rgb(34, 139, 34)',
  lightGreen: 'rgb(144, 238, 144)',
  yellow: 'rgb(255, 255, 0)',
  dry: '#9a5041',
};

@Component({
  selector: 'growth-viz',
  templateUrl: './growth-viz.component.html',
})
export class GrowthVizComponent {
  plantData: any;
  constructor(
    public simulatorService: SimulatorService,
    private route: ActivatedRoute
  ) {
    effect(() => {
      console.log(`🥵 Temperature: ${this.temperature}`);
      console.log(`☀️ Sunlight: ${this.sunlight}`);
      console.log(`💧 Water: ${this.water}`);
    });
  }

  ngOnInit() {
    const plantId = this.route.snapshot.paramMap.get('id');

    if (plantId) {
      for (const category of plantsData.plants) {
        const foundPlant = category.items.find(
          (p: PlantItem) => p.id === plantId
        );
        if (foundPlant) {
          this.plantData = foundPlant;
          break;
        }
      }
    } else {
      console.error(`Plant with ID ${plantId} not found.`);
    }
  }

  get temperature(): number {
    return this.simulatorService.temperature().value;
  }

  get sunlight(): number {
    return this.simulatorService.sunlight().value;
  }

  get water(): number {
    return this.simulatorService.water().value;
  }

  get waterFrequency(): string {
    const level = this.plantData.waterNeeds.level;
    const optimalTempMin = this.plantData.temperatureRange.min;
    const optimalTempMax = this.plantData.temperatureRange.max;

    let baseColor;

    switch (level) {
      case 'High':
        baseColor =
          this.water >= 700
            ? treeColors.darkGreen
            : this.water > 500
            ? treeColors.forestGreen
            : this.water >= 200
            ? treeColors.lightGreen
            : this.water > 100
            ? treeColors.yellow
            : treeColors.dry;
        break;

      case 'Moderate':
        baseColor =
          this.water >= 500
            ? treeColors.darkGreen
            : this.water > 500
            ? treeColors.forestGreen
            : this.water >= 200
            ? treeColors.lightGreen
            : this.water > 100
            ? treeColors.yellow
            : treeColors.dry;
        break;

      case 'Low to Moderate':
        baseColor =
          this.water >= 700
            ? treeColors.darkGreen
            : this.water > 500
            ? treeColors.forestGreen
            : this.water > 100
            ? treeColors.lightGreen
            : treeColors.dry;
        break;

      case 'Varies':
        baseColor =
          this.water > 200
            ? treeColors.lightGreen
            : this.water < 200
            ? treeColors.yellow
            : treeColors.dry;
        break;

      default:
        baseColor = treeColors.dry;
    }

    // Adjust for temperature conditions
    if (
      this.temperature < optimalTempMin ||
      this.temperature > optimalTempMax
    ) {
      if (baseColor === treeColors.darkGreen) {
        return treeColors.forestGreen;
      } else if (baseColor === treeColors.forestGreen) {
        return treeColors.lightGreen;
      } else if (baseColor === treeColors.lightGreen) {
        return treeColors.yellow;
      } else {
        return treeColors.dry;
      }
    }

    return baseColor;
  }

  get sunlightHours(): number {
    return this.sunlight >= 6 ? 8 : 4;
  }

  get plantColor(): string {
    return this.waterFrequency;
  }

  get plantSize(): number {
    return 70;
  }
}
