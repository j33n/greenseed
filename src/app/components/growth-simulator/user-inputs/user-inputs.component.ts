import { Component } from '@angular/core';

@Component({
  selector: 'user-input',
  templateUrl: './user-inputs.component.html',
})
export class UserInputComponent {
  temperature = { value: signal(0) };
  sunlight = { value: 8 };
  water = { value: 500 };

  onTemperatureChange(event: any): void {
    this.temperature.value = event.target.value;
  }

  onSunlightChange(event: any): void {
    this.sunlight.value = event.target.value;
  }

  onWaterChange(event: any): void {
    this.water.value = event.target.value;
  }
}
