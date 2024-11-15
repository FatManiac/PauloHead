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
  menuPlayer: HTMLAudioElement;
  persoPlayer: HTMLAudioElement;
  selectPlayer: HTMLAudioElement;
  selectNoisePlayer: HTMLAudioElement;
  persos = [
    {name: 'Paulo', img: 'pauloHead.png', audio: ['Paulo1.wav', 'Paulo2.wav']},
    {name: 'Reflex', img: 'reflexHead.png', audio: ['Reflex1.wav', 'Reflex2.wav']},
    {name: 'Peka', img: 'pekaHead.png', audio: ['Peka1.wav', 'Peka2.wav']},
    {name: 'Velfus', img: 'velfusHead.png', audio: ['Velfus1.wav', 'Velfus2.wav']},
    {name: 'Soso', img: 'sosoHead.png', audio: ['Soso1.wav', 'Soso2.wav']},
    {name: 'Nico', img: 'nicoHead.png', audio: ['Nico1.wav', 'Nico2.wav']},
    {name: 'Axel', img: 'axelHead.png', audio: ['Axel1.wav', 'Axel2.wav']},
    {name: 'Bonus', img: 'tomskyeHead.png', audio: ['Bonus.wav']},
  ];
  persoIndex = 0;
  isSelectPersoShowed = false;
  secondVolume = 0.25;

  constructor() {
    this.menuPlayer = new Audio();
    this.persoPlayer = new Audio();
    this.selectPlayer = new Audio();
    this.selectNoisePlayer = new Audio();
  }

  ngOnInit() {
    this.menuPlayer.src = 'filtre.wav';
    this.menuPlayer.loop = true;
    this.menuPlayer.volume = this.secondVolume;
    this.menuPlayer.load();
    this.persoPlayer.src = 'nofiltre.wav';
    this.persoPlayer.src = 'nofiltre.wav';
    this.persoPlayer.loop = true;
    this.persoPlayer.volume = this.secondVolume;
    this.persoPlayer.load();
    this.selectNoisePlayer.src = '2008.mp3';
    this.selectNoisePlayer.volume = this.secondVolume;
    this.selectNoisePlayer.load();
  }

  switchPaulo() {
    console.log('Paulo Head');
    this.isPauloHeadShowed = !this.isPauloHeadShowed;
    if (this.isPauloHeadShowed) {
      this.menuPlayer.pause();
      this.persoPlayer.play();
    }
  }

  selectPerso(perso: any) {
    this.persoIndex = this.persos.indexOf(perso);
    this.isSelectPersoShowed = false;
    const rand = Math.floor(Math.random() * perso.audio.length);
    this.selectPlayer.src = perso.audio[rand];
    console.log('src: ', this.selectPlayer.src, rand);
    this.selectPlayer.volume = 1;
    this.selectPlayer.load();
    this.selectPlayer.play();
    console.log('Selected perso: ', perso);
  }

  returnToSelectPerso() {
    this.isSelectPersoShowed = true;
    this.isPauloHeadShowed = !this.isPauloHeadShowed;
    this.persoPlayer.pause();
    this.menuPlayer.play();
  }


  playSelectNoise() {
    this.selectNoisePlayer.pause();
    this.selectNoisePlayer.play();
  }

  showMenu() {
    this.isSelectPersoShowed = true;
    this.menuPlayer.play();
  }
}
