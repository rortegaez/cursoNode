import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./hola.txt', 'utf-8'),
  readFile('./extras.txt', 'utf-8')
]).then(([text, secondText]) => {
  console.log('primer texto:', text)
  console.log('segundo texto:', secondText)
})
