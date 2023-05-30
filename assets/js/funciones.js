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

                case 5:
            function compra() {
                let valor = parseInt(prompt("Bienvenido!!\nIngrese el valor del producto"))
                let cantidad = parseInt(prompt("Ingrese la cantidad de productos"));
                let compra = valor * cantidad;
                let iva = compra * 0.19
                let descuento = compra * 0.10
                let agregado = compra - iva
                let descuentoIva = descuento + iva
                let total = compra + iva

                console.log("     EJERCICIO 5")
                if (compra > 1000000) {

                    console.log("# Por hacer compras mayores  a 1.000.000 le devolvemos el iva y ademas le hacemos un descuento del 10%")
                    console.log("*Valor a pagar: ---" + descuentoIva)
                    console.log("* El valor de su compra fue: ---" + compra)
                    console.log("* Valor del iva: ---" + iva)
                    console.log("* Su descuento fue de : ---" + descuento)
                }

                else if (compra > 500000) {
                    console.log("# Por hacer compras mayores  a 500.000 le devolvemos el iva")  
                    console.log("*Valor a pagar: ---" + agregado)
                    console.log("* El valor de su compra fue: ---" + compra)
                    console.log("* Valor del iva: ---" + iva)
                }

                else {

                    console.log("* Valor de la compra: ---" + compra);
                    console.log("* valor del iva: ---" + iva)
                    console.log("* Valor total a pagar: ---" + total)
                }
                ejecuciones.ejercicioCinco++
            }
            compra()
            break;

            case 6:


            function calificaciones() {
                let notaUno = parseFloat(prompt("Ingrese la primera nota"))
                let notaDos = parseFloat(prompt("Ingrese la segunda nota"))
                let notaTres = parseFloat(prompt("Ingrese la tercera nota"))
                let notaCuatro = parseFloat(prompt("Ingrese la cuarta nota"))


                let notaFinal = (notaUno * 0.10 + notaDos * 0.20 + notaTres * 0.30 + notaCuatro * 0.40)

                if (notaCuatro === 5) {
                    notaUno += 0.1
                    notaDos += 0.1
                    notaTres += 0.1
                }
                console.log("     EJERCICIO 6")
                console.log("# La nota final del estudiante es: --- " + notaFinal)

                if (notaFinal > 3.5) {
                    console.log("* Gano");
                } else {
                    console.log("* Perdio");
                }
                ejecuciones.ejercicioSeis++

            }

            calificaciones()
            break;
    }
}
while (menu !== 7) {
    console.log("-----EJECUCIONES--------------------------------")
    console.log(" 1.Ordenar numeros:  " + ejecuciones.ejercicioUno)
    console.log(" 2.Calcular area:  " + ejecuciones.ejercicioDos)
    console.log(" 3.Tipos de triangulos:  " + ejecuciones.ejercicioTres)
    console.log(" 4.Numeros amigos:  " + ejecuciones.ejercicioCuatro)
    console.log(" 5.Valor de la compra:  " + ejecuciones.ejercicioCinco)
    console.log(" 6.Calificacion: " + ejecuciones.ejercicioSeis)

}

let masEjecutada, menosEjecutada;
let maxiomoEjecuciones=0;
let minimoEjecuciones=  Infinity;

for(let menu in ejecuciones ){
    if(ejecuciones[menu]> maxiomoEjecuciones){
        maxiomoEjecuciones=ejecuciones[menu]
        masEjecutada=menu
    }
    if(ejecuciones[menu] < minimoEjecuciones){
        minimoEjecuciones=ejecuciones[menu];
        menosEjecutada=menu;
    }
}

console.log("-----MAS Y MENOS EJECUTADOS-----------------------")
console.log(`Mas ejecutado: ${masEjecutada}`)
console.log(`Menos ejecutado: ${menosEjecutada}`)