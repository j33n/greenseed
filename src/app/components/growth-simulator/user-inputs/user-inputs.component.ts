import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-inputs.component.html',
})
export class UserInputComponent {
  temperature = signal({ value: 25 });
  sunlight = signal({ value: 8 });
  water = signal({ value: 500 });

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
}
