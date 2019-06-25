// 1.- Seleccionar dificultad según numero de piezas.
function getNumberPiecesFromUser() {
  while (true) {
    let num = prompt("Elige un numero: ");
    let raiz = Math.sqrt(num);
    if (Number.isInteger(raiz)) {
      alert("Estas Dentro");
      return num;
    } else {
      alert("NOP");
    }
  }
}

//2.1.- Multiplicador de la cantidad de piezas.
function getMaxScore(piezas) {
  let score = piezas * 2;
  return score;
}
console.log(getScore());

//2.2.- Coge la puntuación pasada por pantalla.
function getScore() {
  let score = document.getElementById("score").textContent;
  let array = score.split(":");
  let numero = parseInt(array[1]);
  return numero;
}
console.log(getMaxScore(9));

//2.3.- Actualiza la puntuación por una nueva.
function updateScore(nuevaPuntuacion) {
  document.getElementById("score").textContent = "Score: " + nuevaPuntuacion;
}
console.log(updateScore(24));

//2.4.- Actualiza la puntuación restando el parametro pasado.
function decreaseScore(num) {
  let score = getScore();
  let decrease = score - num;
  updateScore(decrease);
}
console.log(decreaseScore(3));

//3.1.- Modifica la altura teniendo en cuenta que el parametro más elevado será convertido a 200.
function getNewSizes(width, height) {
  let maxSize = 200;

  //Maximo 200 de ancho
  if (width > height) {
    height = height * maxSize / width;
    width = maxSize;
    return [width, height];

    //Maximo 200 de ancho
  } else {
    width = width * maxSize / height;
    height = maxSize;
    return [width, height];
  }
}
console.log(getNewSizes(200, 200));

//3.2.- Función encargada de mezclar las cartas.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    let num_aleat = Math.floor((Math.random() * i));
    let valor2 = array[i];
    array[i] = array[num_aleat];
    array[num_aleat] = valor2;
  }
  return array;
}
console.log(shuffle(array));

//3.3.- Cuenta el numero de filas y columnas que hay.
function pieceNumberToRowColumns(numeroP, piezas) {
  let posicion = [];
  let size = Math.sqrt(piezas);
  let fil = Math.floor(numeroP / size);
  let col = numeroP % size;

  posicion.push(col);
  posicion.push(fil);

  return posicion;
}
console.log(pieceNumberToRowColumns(8, 9));

//4.1.- Función encargada de crear la estructura del puzzle y añadir la imagen.
function createPuzzleLayout(num_piezas, anchura, altura, direccion) {

  let total = Math.sqrt(num_piezas);
  let tabla = document.createElement('table');
  var num = 0;
  for (let i = 0; i < total; i++) {
    let row = document.createElement('tr');

    for (var e = 0; e < total; e++) {
      let col = document.createElement('td');
      col.id = 'piece' + num++;
      col.style = "border: 2px solid black;";
      col.style.backgroundImage = 'url(' + direccion + ')';
      col.height = anchura / total;
      col.width = altura / total;

      row.appendChild(col);
    }
    tabla.appendChild(row);
  }
  document.body.appendChild(tabla);

}
console.log(createPuzzleLayout(9, 900, 900, 'cat.jpg'));

//4.2.- Establece la altura y anchura de la imagen de cada casilla.
function pieceToOffset(numeroP, anchura, altura, piezas) {
  let xy = pieceNumberToRowColumns(numeroP, piezas);

  let num_anchura = (Math.sqrt(piezas) * anchura);
  let num_altura = (Math.sqrt(piezas) * altura);

  let newanchura = (xy[0] * num_anchura) * -1;
  let newaltura = (xy[1] * num_altura) * -1;
  return [newanchura, newaltura];
}
console.log(pieceToOffset(9, 100, 100, 9));

//4.2.- Como infica el nombre de la funcion, crea una solución de referencia.
function createReferenceSolution(anchura, altura, numeroP) {
  let xy = [];
  for (let i = 0; i <= numeroP - 1; i++) {
    let e = pieceToOffset(i, anchura, altura, numeroP);
    xy.push(e);
  }
  return xy;
}
console.log(createReferenceSolution(100, 100, 9));

//4.3.- Desordena las casillas del puzzle.
let array_despl = [1, 2];
function drawContentPuzzle(array_despl) {
  for (let i = 0; i < array_despl.length; i++) {
    let col = document.getElementById('piece' + i);
    col.style.backgroundPosition = array_despl[i][0] + 'px ' + array_despl[i][1] + 'px ';
  }
}
drawContentPuzzle(createReferenceSolution(100, 100, 9));

//5.1.- Comprueba si el puzzle está sulucionado.
function checkIfSolution(solucionado, actual) {
  for (let i = 0; i < solucionado.length; i++) {
    if (solucionado[i] !== actual[i]) {
      return false;
    }
  }
  return true;
}

//5.2.- Dispara un evento que ejecuta la lógica del juego..
function initGame(imageURL, numberOfPieces) {
  let img = new Image();
  img.addEventListener('load', function () {
    gameLogic(img, numberOfPieces);
  });
  img.src = imageURL;
}
//5.3.1.- Inicializa las funciones encargadas de crear el puzzle y desorganizarlo.
function gameLogic() {
  drawContentPuzzle(shuffle(createReferenceSolution(100, 100, 9)));
  for (let i = 0; i < 9; i++) { //para cada celda
    const celda = document.getElementById('piece' + i);
    console.log(celda);

    celda.addEventListener('click', firstClick);
    function firstClick() {
      let color = "";
      let position = "";
      let element = "";
      element = document.getElementById('piece' + i);
      color = element.style.backgroundImage
      position = element.style.backgroundPosition

      const id = element.getAttribute('id');
      console.log(color); // 2em
      console.log(id); // 2em
      for (let i = 0; i < 9; i++) { //para cada celda
        let celda2 = document.getElementById('piece' + i);
        celda2.addEventListener('click', secondClick);
        function secondClick() {
          let element2 = document.getElementById('piece' + i);
          color2 = element2.style.backgroundImage
          position2 = element2.style.backgroundPosition
          element2.style.backgroundImage = color;
          element2.style.backgroundPosition = position;
          element.style.backgroundImage = color2;
          element.style.backgroundPosition = position2;
          celda2.removeEventListener('click', secondClick);
        }
      }
      celda.removeEventListener('click', firstClick);
    }
  }
}


getNumberPiecesFromUser();
initGame('cat.jpg', 9);
