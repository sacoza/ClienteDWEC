import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'floridaNews';
  public imagesUrl;
  urls = ['../../assets/img/julen.jpg', '../../assets/img/nissan.jpg','../../assets/img/altavoz.png'];
  parrafo = ['Julen, rescate del niño en el pozo de Totalán (Málaga)','Nissan desmiente que Francia le haya propuesto una fusion con Renault','Microsoft tira la toalla en la guerra de los asistentes de voz'];
  imgFavorites = [];
  strFavorites = [];

  addImgFavoritesArray (event) {
    this.imgFavorites = [];
    this.imgFavorites.push(event);
  }

  addStrFavoritesArray (event) {
    this.strFavorites = [];
    this.strFavorites.push(event);
  }


  ngOnInit() {
      this.imagesUrl = [
      '../assets/img/julen.jpg',
      '../assets/img/Julio.jpg',
      '../assets/img/Robin.jpg',
      ];
  }

}

