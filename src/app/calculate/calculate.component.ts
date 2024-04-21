import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculate.component.html',
  styleUrl: './calculate.component.css'
})
export class CalculateComponent {

  tempCel: number = 0;
  tempFah: number = 32;
  disFeet: number = 0;
  disMeter: number = 0;

  onChangeTempCel(temp: number): void {
    if (temp != null) {
      this.tempFah = (temp * 1.8) + 32;
    } else {
      this.tempFah = 0;
    }
  }

  onChangeTempFah(temp: number): void {
    if (temp != null) {
      this.tempCel = (temp - 32) * (5 / 9);
    } else {
      this.tempCel = 0;
    }
  }

  onChangeFeet(distance: number): void {
    if (distance != null) {
      this.disMeter = distance / 3.28;
    } else {
      this.disMeter = 0;
    }
  }

  onChangeMeter(distance: number): void {
    if (distance != null) {
      this.disFeet = distance * 3.28;
    } else {
      this.disFeet = 0;
    }
  }
}
