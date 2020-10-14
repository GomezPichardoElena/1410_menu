import { leerTeclado } from './lecturaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Rectángulo')
    console.log('2.- Cuadrado')
    console.log('3.- Triángulo')
    console.log('4.- Círculo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}