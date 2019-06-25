document.addEventListener("DOMContentLoaded", logicaPrograma);



//Funcion que crea un tabla
function crearTabla(fila, columna) {
    let tabla = document.createElement("table");
    let posicion = 0;

    //filas
    for (let i = 0; i < fila; i++) {
        let tr = document.createElement("tr");
        tabla.appendChild(tr);
        let fila = tabla.lastElementChild;

        //columna
        for (let x = 0; x < columna; x++) {
            let td = document.createElement("td");
            td.style = 'border: 3px solid black; width: 80px; height: 80px;';
            td.id = 'celda' + (posicion++);
            fila.appendChild(td);


        }
    }

    document.getElementsByTagName("body")[0].appendChild(tabla);

}


//Funcion para pintar una casilla
function colorearCasilla(id_celda) {
    let coloresArray = ["red", "blue", "yellow"];
    let celda = document.getElementById('celda' + id_celda).style.background = coloresArray[Math.floor(Math.random() * coloresArray.length)];

    return celda;
}

//Funcion que colorea las casillas de la tabla con colores aleatorios
function colorearTabla() {
    for (let i = 0; i < 5 * 5; i++) { //para cada celda
        colorearCasilla(i);
    }
}
//Funcionalidad de intercambiar casillas
function manejadorEventos() {
    var body = document.body;
    var h3 = document.createElement("h3");
    h3.innerHTML = "You have:";
    h3.style = "float:left; margin-top:10px; margin-left: 6px";
    body.appendChild(h3);
    for (let i = 0; i < 5 * 5; i++) { //para cada celda
        const celda = document.getElementById('celda' + i);
        celda.addEventListener('click', firstClick);
        function firstClick() {
            const element = document.getElementById('celda' + i);
            const color = element.style.background
            const id = element.getAttribute('id');
            console.log(color); // 2em
            console.log(id); // 2em
            var body = document.body;

            var h5 = document.createElement("h5");
            h5.innerHTML = color;
            h5.style = "float:left; margin-top:16px; margin-left: 6px;";
            body.appendChild(h5);
            for (let i = 0; i < 5 * 5; i++) { //para cada celda
            const celda2 = document.getElementById('celda' + i);
            celda2.addEventListener('click', secondClick);
            function secondClick() {
                    const element2 = document.getElementById('celda' + i);
                    element2.style.background = color;
                    console.log(element2+"aaa");
                }
            }
        }
    }
}

//Funcion logica del programa
function logicaPrograma() {
    crearTabla(5, 5);
    colorearCasilla(10);
    colorearTabla();
    manejadorEventos();
}