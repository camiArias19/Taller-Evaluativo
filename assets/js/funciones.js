let ejecuciones = {
    ejercicioUno: 0,
    ejercicioDos: 0,
    ejercicioTres: 0,
    ejercicioCuatro: 0,
    ejercicioCinco: 0,
    ejercicioSeis: 0
}

let menu = 0
do {
    menu = Number(prompt(" Taller evaluativo \nSeleccione una opcion.\n\n1.Ordenar numeros\n2.Calcular area\n3.Tipos de triangulos\n4.Numeros amigos\n5. Valor de la compra\n6.Calificacion \n7. salir"))

    switch (menu) {
        case 1:
            function numerosOrdenados() {
                let numeroUno = parseInt(prompt("Ingrese un numero"))
                let numeroDos = parseInt(prompt("Ingrese un numero"))
                let numeroTres = parseInt(prompt("Ingrese un numero"))

                let menorMayor, mayorMenor;

                if (numeroUno <= numeroDos) {

                    if (numeroUno <= numeroTres) {
                        menorMayor = numeroUno;

                        if (numeroDos <= numeroTres) {
                            menorMayor += ", " + numeroDos + ", " + numeroTres;
                            mayorMenor = numeroTres + ", " + numeroDos + ", " + numeroUno;
                        } else {
                            menorMayor += ", " + numeroTres + ", " + numeroDos;
                            mayorMenor = numeroDos + ", " + numeroTres + ", " + numeroUno;
                        }
                    } else {
                        menorMayor = numeroTres + ", " + numeroUno + ", " + numeroDos;
                        mayorMenor = numeroDos + ", " + numeroUno + ", " + numeroTres;
                    }
                } else {

                    if (numeroDos <= numeroTres) {
                        menorMayor = numeroDos;

                        if (numeroUno <= numeroTres) {
                            menorMayor += ", " + numeroUno + ", " + numeroTres;
                            mayorMenor = numeroTres + ", " + numeroUno + ", " + numeroDos;
                        } else {
                            menorMayor += ", " + numeroTres + ", " + numeroUno;
                            mayorMenor = numeroUno + ", " + numeroTres + ", " + numeroDos;
                        }
                    } else {
                        menorMayor = numeroTres + ", " + numeroDos + ", " + numeroUno;
                        mayorMenor = numeroUno + ", " + numeroDos + ", " + numeroTres;
                    }
                }
                console.log("     EJERCICIO 1")
                console.log("# Ordenados de menor a mayor: ---" + menorMayor);
                console.log("# Ordenados de mayor a menor: ---" + mayorMenor);

                ejecuciones.ejercicioUno++
            }
            numerosOrdenados()
            break;
            case 2:
            function calcularArea() {
                let radio = parseInt(prompt("ingrese el radio "))
                area = 3.14 * Math.pow(radio, 2)
                console.log("     EJERCICIO 2")
                console.log("# El area es: ---" + area)

                ejecuciones.ejercicioDos++;
            }

            calcularArea()
            break;