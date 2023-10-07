import { Component, signal, effect } from '@angular/core';

import { SimulatorService } from '../../../services/simulator.service';

@Component({
  selector: 'user-input',
  templateUrl: './user-inputs.component.html',
})
export class UserInputComponent {
  constructor(public simulatorService: SimulatorService) {}

  onTemperatureChange(event: any): void {
    this.simulatorService.onTemperatureChange(event);
  }

  onSunlightChange(event: any): void {
    this.simulatorService.onSunlightChange(event);
  }

  onWaterChange(event: any): void {
    this.simulatorService.onWaterChange(event);
  }
}

// NON-SIGNAL FUNCTIONALITY
// import { Component } from '@angular/core';

// @Component({
//   selector: 'user-input',
//   templateUrl: './user-inputs.component.html',
// })
// export class UserInputComponent {
//   temperature = { value: 0 };
//   sunlight = { value: 8 };
//   water = { value: 500 };

//   onTemperatureChange(event: any): void {
//     this.temperature.value = event.target.value;
//   }

//   onSunlightChange(event: any): void {
//     this.sunlight.value = event.target.value;
//   }

//   onWaterChange(event: any): void {
//     this.water.value = event.target.value;
//   }
// }
