import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pauloHead';
  isPauloHeadShowed = false;
  persos = [
    {name: 'Paulo', img: 'pauloHead.png'},
    {name: 'Reflex', img: 'reflexHead.png'},
    {name: 'Peka', img: 'pekaHead.png'},
    {name: 'Velfus', img: 'velfusHead.png'},
    {name: 'Soso', img: 'sosoHead.png'},
    {name: 'Nico', img: 'nicoHead.png'},
    {name: 'Axel', img: 'axelHead.png'},
    {name: 'Bonus', img: 'tomskyeHead.png'},
  ];
  persoIndex = 0;
  isSelectPersoShowed = true;

  switchPaulo() {
    console.log('Paulo Head');
    this.isPauloHeadShowed = !this.isPauloHeadShowed;
  }

  selectPerso(perso: any) {
    this.persoIndex = this.persos.indexOf(perso);
    this.isSelectPersoShowed = false;
    console.log('Selected perso: ', perso);
  }

  returnToSelectPerso() {
    this.isSelectPersoShowed = true;
  }
}
