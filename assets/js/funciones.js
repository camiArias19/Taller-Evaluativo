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
            case 3:
            function tipoTriangulo() {
                let ladoUno = parseInt(prompt("Ingrese el primer lado del triangulo"))
                let ladoDos = parseInt(prompt("Ingrese el segundo lado del triangulo"))
                let ladoTres = parseInt(prompt("Ingrese el tercer lado del triangulo"))
                console.log("     EJERCICIO 3")
                if (ladoUno == ladoDos && ladoDos == ladoTres) {

                    console.log("# Triangulo Equilatero")
                }
                else if (ladoUno == ladoDos || ladoUno == ladoTres || ladoDos == ladoTres) {
                    console.log("# Triangulo Isoceles")
                }
                else {
                    console.log("# Triangulo Escaleno")
                }
                ejecuciones.ejercicioTres++
            }
            tipoTriangulo()
            break;
            case 4:
                function sumaDivisores(numero) {
                    let suma = 0;
                    for (let i = 1; i <= numero / 2; i++) {
                        if (numero % i == 0) {
                            suma += i;
                        }
                    }
                    return suma;
                }
                function sonAmigos(numeroUno, numeroDos) {
                    let sumaUno = sumaDivisores(numeroUno);
                    let sumaDos = sumaDivisores(numeroDos);
    
                    return sumaUno == numeroDos && sumaDos == numeroUno;
                }
                let numeroUno = parseInt(prompt("Ingrese el primer número:"));
                let numeroDos = parseInt(prompt("Ingrese el segundo número:"));
                console.log("     EJERCICIO 4")
                if (sonAmigos(numeroUno, numeroDos)) {
                    console.log(`# Los numeros ${numeroUno} y ${numeroDos}-- son números amigos.`);
                } else {
                    console.log(`# Los numeros ${numeroUno} y ${numeroDos}-- no son números amigos.`);
                    ejecuciones.ejercicioCuatro++;
                }
    
    
                break;