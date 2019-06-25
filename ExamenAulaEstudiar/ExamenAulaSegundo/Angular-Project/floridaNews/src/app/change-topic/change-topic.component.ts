import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change-topic',
  templateUrl: './change-topic.component.html',
  styleUrls: ['./change-topic.component.css']
})
export class ChangeTopicComponent implements OnInit {
  //Iniciamos las variables, en ellas almacenaremos lo que mas tarde mostraremos.
  title: string = 'Podria interesarte: ';
  imgArray: string[][] = [["../../assets/img/marc.jpg", 'Deportes', 'Marc Gasol despierta y levanta a los Grizzlies delante de su hermano Pau', 'https://www.elmundo.es/deportes/baloncesto/2019/01/10/5c36f4d7fc6c83d8298b476d.html'],
                          ["../../assets/img/protestas.jpg", 'Economia', 'La pobreza se "cronifica": un 15% de la clase media española aún no ha salido de la crisis', 'https://www.elmundo.es/economia/2019/01/21/5c44b88c21efa026368b457b.html'],
                          ["../../assets/img/stan.jpg", 'Cultura', '"Lenin inventó a Stalin"', 'https://www.elmundo.es/cultura/2019/01/21/5c44ca6821efa0ac798b4591.html']];
  imgSelected: string = "../../assets/img/marc.jpg";
  strSelected: string = 'Deportes';
  newSelected: string = 'Marc Gasol despierta y levanta a los Grizzlies delante de su hermano Pau';
  //Esta variable la usamos para controlar la posicion del array que contiene las noticias.
  arrayPosition: number = 1;
  @Output() outputString = new EventEmitter();
  @Output() outputImage = new EventEmitter();
  @Output() outputNew = new EventEmitter();

  changeTopic() {
    /**
     * Cada vez que usamos el boton, lanzamos la funcion changeTopic, con esto conseguimos mover el array una posicion.
     * Ademas de almacenar cada dato en una nueva variable, para mostrarlo por el html
     */
    this.imgSelected = this.imgArray[this.arrayPosition][0];
    this.strSelected = this.imgArray[this.arrayPosition][1];
    this.newSelected = this.imgArray[this.arrayPosition][2];
    this.arrayPosition++;
    if (this.arrayPosition > this.imgArray.length - 1) {
      this.arrayPosition = 0;
    }
  }

  addFavorites() {
    this.outputString.emit( this.strSelected );
    this.outputImage.emit( this.imgSelected );
    this.outputNew.emit( this.newSelected );
  }

  ngOnInit() {
    //Some code here.
  }
}
