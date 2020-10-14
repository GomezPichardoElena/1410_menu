import { menu } from '../vistas/menuG'
import { leerTeclado } from '../vistas/lecturaTeclado'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Ha seleccionado Calcular el área y el perímetro del Rectangulo')
                let baseR:number, alturar:number
                baseR = parseInt(await leerTeclado('Porfavor, introduzca la base del rectángulo'))
                alturar = parseInt(await leerTeclado('Porfavor, introduzca la altura del rectángulo'))
                let perimetroR=perimetroRectangulo(baseR,alturar)
                let areaR=areaRectangulo(baseR,alturar)
                console.log("El perímetro del rectángulo es = "+perimetroR)
                console.log("El área del rectángulo es = "+areaR)
                break
            case 2:
                console.log('Ha seleccionado Calcular el área y el perímetro del Cuadrado')
                let ladoC:number
                ladoC = parseInt(await leerTeclado('Porfavor, introduzca el lado del cuadrado'))
                let perimetroC=perimetroCuadrado(ladoC)
                let areaC=areaCuadrado(ladoC)
                console.log("El perímetro del cuadrado es = "+perimetroC)
                console.log("El área del cuadrado es = "+areaC)
                break
            case 3:
                console.log('Ha seleccionado Calcular el área y el perímetro del Triángulo')
                let baseT:number, alturaT:number, lado1:number, lado2:number
                baseT =  parseInt( await leerTeclado('Porfavor, introduzca la base del triángulo'))
                alturaT =  parseInt( await leerTeclado('Porfavor, introduzca la altura del triángulo'))
                lado1 =  parseInt( await leerTeclado('Porfavor, introduzca otro lado del triángulo'))
                lado2 =  parseInt( await leerTeclado('Porfavor, introduzca el último lado del triángulo'))
                let perimetroT=perimetroTriangulo(baseT,lado1,lado2)
                let areaT=areaTriangulo(baseT,alturaT)
                console.log("El perímetro del triángulo es = "+perimetroT)
                console.log("El área del triángulo es = "+areaT)
                break
            case 4:
                console.log('Ha seleccionado Calcular el área y el perímetro del Círculo')
                let radio:number
                radio = parseInt(await leerTeclado('Porfavor, introduzca el radio del círculo'))
                let perimetroCi=perimetroCirculo(radio)
                let areaCi=areaCirculo(radio)
                console.log("El perímetro del círculo es = "+perimetroCi)
                console.log("El área del círculo es = "+areaCi)
                break
            case 0:
                console.log('\nGracias, Adiós')
                break
            default:
                console.log("Opción incorrecta, por favor use una opción válida")
                break
        }
    }while (n != 0)
}
 



/*Rectángulo */

const perimetroRectangulo = (base:number, altura:number) => {
    let resRec=0
    resRec=(base*2+altura*2)
    return resRec
}

const areaRectangulo = (base:number, altura:number) => {
    let resR=0
    resR=altura*base
    return resR
}
main()

/*Cuadrado */

const perimetroCuadrado = (lado:number) => {
    let resCuadrado=0
    resCuadrado=lado*4
    return resCuadrado
}

const areaCuadrado = (lado:number) => {
    let resC=0
    resC=lado*lado
    return resC
}

/*trángulo */

const perimetroTriangulo = (lado1:number, lado2:number, lado3:number) => {
    let resT=0;
    resT=lado1+lado2+lado3
    return resT
}

const areaTriangulo = (base:number, altura:number) => {
    let resTr=0
    resTr=(base*altura)/2
    return resTr
}

/*Circulo */

const perimetroCirculo = (radio:number) => {
    let resCi=0
    resCi=2*radio*Math.PI
    return resCi
}

const areaCirculo = (radio:number) => {
    let res=0
    res=(radio*radio)*Math.PI
    return res
}
