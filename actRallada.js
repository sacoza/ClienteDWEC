const readline = require('readline-sync');

class ArtCientifico {
    constructor(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones) {
        this.tituloCientifico = tituloCientifico;
        this.autores = autores;
        this.NumPaginas = NumPaginas;
        this.anyoPublicacion = anyoPublicacion;
        this.menciones = menciones;
    }
}

class artRevista extends ArtCientifico {
    constructor(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones, tituloRevista, editorial, FactorImpacto) {
        super(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones);
        this.tituloRevista = tituloRevista;
        this.editorial = editorial;
        this.FactorImpacto = FactorImpacto;
    }
}
class ArtConferencia extends ArtCientifico {
    constructor(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones, nombre, lugar) {
        super(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones);
        this.nombre = nombre;
        this.lugar = lugar;
    }
}
class PatentesCinetificas {
    /**
     * 
     * @param {*} autor 
     * @param {*} anyoPublicacion2 
     * @param {*} anyoVencimiento 
     */
    constructor(autor, anyoPublicacion2, anyoVencimiento) {
        this.autor = autor;
        this.anyoPublicacion2 = anyoPublicacion2;
        this.anyoVencimiento = anyoVencimiento;
    }
}
let lista = [];
let salir = false;
while (!salir) {
    console.log('Bienvenidos...');
    console.log('1)Dar de alta Articulo Cinetifico');
    console.log('4)Dar de alta Patentes Cientificas');
    console.log('5)Buscar articulo');
    console.log('6)Dar de baja');
    console.log('7)Modificar');
    console.log('-1)Salir del sistema');
    let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');
    if (opcion === 1) {
        let tituloCientifico = readline.question('Por favor, introduce el titulo Cientifico ');
        let autores = readline.question('Por favor, introduce el autor ');
        let NumPaginas = readline.question('Por favor, introduce el numero de paginas ');
        let anyoPublicacion = readline.question('Por favor, introduce el anyo de publicacion ');
        let menciones = readline.question('Por favor, introduce las menciones ');

        console.log('2)Dar de alta Articulo Revista');
        console.log('3)Dar de alta Articulo Conferencia');
        let opcion = readline.questionInt('Por favor, seleccione una de estas opciones: ');

        if (opcion === 2) {
            let tituloRevista = readline.question('Por favor, introduce el titulo Revista ');
            let editorial = readline.question('Por favor, introduce el editorial ');
            let FactorImpacto = readline.question('Por favor, introduce el Factor Impacto ');

            let newlista = new artRevista(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones, tituloRevista, editorial, FactorImpacto);
            lista.push(newlista);
            console.log(lista);
        } else if (opcion === 3) {
            /*Articulo Conferencia*/
            let nombre = readline.question('Por favor, introduce el nombre del articulo Cientifico ');
            let lugar = readline.question('Por favor, introduce el lugar ');

            let newlista = new ArtConferencia(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones, nombre, lugar);
            lista.push(newlista);
            console.log(lista);
        }
    } else if (opcion === 4) {
        /*Patentes Cientificas*/
        let autor = readline.question('Por favor, introduce el autor ');
        let anyoPublicacion2 = readline.question('Por favor, introduce el anyo de publicacion ');
        let anyoVencimiento = readline.question('Por favor, introduce el anyo de vencimiento ');
        let newlista = new PatentesCinetificas(autor, anyoPublicacion2, anyoVencimiento);
        lista.push(newlista);
        console.log(lista);


        /*BUSCAR*/
    } else if (opcion === 5) {
        console.log('1)Buscar Articulo Revista');
        console.log('2)Buscar Articulo Conferencia');
        console.log('3)Buscar Patente Cientifica');
        console.log('-1)Salir del sistema');
        let buscar = readline.questionInt('Por favor, seleccione una de estas opciones: ');
        if (buscar === 1) {
            /*Articulo Cientifico*/
            let autores = readline.question('Por favor, introduce el titulo Revista ');
            let anyoPublicacion = readline.question('Por favor, introduce el anyo de publicacion ');
            let tituloRevista = readline.question('Por favor, introduce el titulo Revista ');
            for (let artRevista of lista) {
                if (artRevista.tituloRevista === tituloRevista) {
                    console.log(artRevista);
                    break;
                }
            }
        }
        if (buscar === 2) {
            /*Articulo Cientifico*/
            let nombre = readline.question('Por favor, introduce el titulo Revista ');
            for (let ArtConferencia of lista) {
                if (ArtConferencia.nombre === nombre) {
                    console.log(ArtConferencia);
                    break;
                }
            }
        }
        if (buscar === 3) {
            /*Articulo Cientifico*/
            let autor = readline.question('Por favor, introduce el titulo Revista ');
            for (let PatentesCinetificas of lista) {
                if (PatentesCinetificas.autor === autor) {
                    console.log(PatentesCinetificas);
                    break;
                }
            }
        }
    } else if (opcion === 6) {
        console.log('1)Borrar Articulo Revista');
        console.log('2)Borrar Articulo Conferencia');
        console.log('3)Borrar Patente Cientifica');
        console.log('-1)Salir del sistema');
        let buscar = readline.questionInt('Por favor, seleccione una de estas opciones: ');
        if (buscar === 1) {
            /*Articulo Cientifico*/
            let tituloRevista = readline.question('Por favor introduce un titulo de revista: ');
            let modificado = false;
            for (let i = 0; i < lista.length; i++) {
                let artRevista = lista[i];
                if (artRevista.tituloRevista === tituloRevista) {
                    lista.splice(i, 1);
                    modificado = true;
                    break;
                }
            }

            if (autormodificado) {
                console.log('Articulo encontrado y borrado del sistema');
                console.log(lista);
            } else {
                console.log('Articulo no encontrado en el sistema');
            }
        }
        if (buscar === 2) {
            /*Articulo Cientifico*/
            let nombre = readline.question('Por favor introduce un nombre: ');
            let modificado = false;
            for (let i = 0; i < lista.length; i++) {
                let ArtConferencia = lista[i];
                if (ArtConferencia.nombre === nombre) {
                    lista.splice(i, 1);
                    modificado = true;
                    break;
                }
            }

            if (modificado) {
                console.log('Articulo encontrado y borrado del sistema');
                console.log(lista);
            } else {
                console.log('Articulo no encontrado en el sistema');
            }
        }
        if (buscar === 3) {
            /*Articulo Cientifico*/
            let autor = readline.question('Por favor introduce un autor: ');
            let modificado = false;
            for (let i = 0; i < lista.length; i++) {
                let PatentesCinetificas = lista[i];
                if (PatentesCinetificas.autor === autor) {
                    lista.splice(i, 1);
                    modificado = true;
                    break;
                }
            }

            if (modificado) {
                console.log('Articulo encontrado y borrado del sistema');
                console.log(lista);
            } else {
                console.log('Articulo no encontrado en el sistema');
            }
        }
    } else if (opcion === 7) {
        console.log('1)Modificar Articulo Revista');
        console.log('2)Modificar Articulo Conferencia');
        console.log('3)Modificar Patente Cientifica');
        console.log('-1)Salir del sistema');
        let modificar = readline.questionInt('Por favor, seleccione una de estas opciones: ');
        if (modificar === 1) {
            /*Articulo Cientifico*/
            let tituloRevista = readline.question('Por favor introduce un autor: ');
            let modificado = undefined;

            for (let i = 0; i < lista.length; i++) {
                let artRevista = lista[i];
                if (artRevista.tituloRevista === tituloRevista) {
                    modificado = artRevista;
                    break;
                }
            }
            if (modificado) {
                //Coche encontrado
                let newtituloRevista = readline.question('Introduce nuevo autor (Actual: ' + modificado.tituloRevista + ' )');
                modificado.tituloRevista = newtituloRevista;
                console.log('Valor modificado');
                console.log(lista);
            } else {
                //Coche no ha sido encontrado
                console.log('articulo no encontrado');
            }
        }
        if (modificar === 2) {
            /*Articulo Cientifico*/
            let nombre = readline.question('Por favor introduce un autor: ');
            let modificado = undefined;

            for (let i = 0; i < lista.length; i++) {
                let ArtConferencia = lista[i];
                if (ArtConferencia.nombre === nombre) {
                    modificado = ArtConferencia;
                    break;
                }
            }
            if (modificado) {
                //Coche encontrado
                let newnombre = readline.question('Introduce nuevo autor (Actual: ' + modificado.nombre + ' )');
                modificado.nombre = newnombre;
                console.log('Valor modificado');
                console.log(lista);
            } else {
                //Coche no ha sido encontrado
                console.log('articulo no encontrado');
            }
        }
        if (modificar === 3) {
            /*Articulo Cientifico*/
            let autor = readline.question('Por favor introduce un autor: ');
            let modificado = undefined;

            for (let i = 0; i < lista.length; i++) {
                let PatentesCinetificas = lista[i];
                if (PatentesCinetificas.autor === autor) {
                    modificado = PatentesCinetificas;
                    break;
                }
            }
            if (modificado) {
                //Coche encontrado
                let newautor = readline.question('Introduce nuevo autor (Actual: ' + modificado.autor + ' )');
                modificado.autor = newautor;
                console.log('Valor modificado');
                console.log(lista);
            } else {
                //Coche no ha sido encontrado
                console.log('articulo no encontrado');
            }
        }
    } else if (opcion === -1) {
        salir = true;
    }
}


