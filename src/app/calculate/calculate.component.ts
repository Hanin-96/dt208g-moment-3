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

  onChangeTempCel(temp: number): void {
    console.log(temp);
    if (temp != null) {
      this.tempFah = (temp * 1.8) + 32;
    }
  }

  onChangeTempFah(temp: number): void {
    if (temp != null) {
      this.tempCel = (temp -32) * (5/9);
    }
  }

}
