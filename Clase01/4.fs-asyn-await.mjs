import { readFile } from 'node:fs/promises'

console.log('leyendo el primer archivo...')
// con este metodo hacemos una lectura sincrona, lo cual, nos para los procesos
// const text = fs.readFileSync("./hola.txt", "utf-8");

// este metodo hace una lectura asincrona
const text = await readFile('./hola.txt', 'utf-8')
console.log('primer texto:', text)

console.log('Hacer cosas mientras lee el archivo')

console.log('leyento el segundo archivo...')
const secondText = await readFile('./extras.txt', 'utf-8')
console.log('segundo texto:', secondText)
