const path = require('node:path')

// barra separadora de carpeta según SO
console.log(path.sep)

// unir ruta con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// nombre del fichero
const base = path.basename('./cjs/index.js')
console.log(base)

// nombre del ficheron sin extensión
const filename = path.basename('./cjs/index.js', '.js')
console.log(filename)

// para sacar la extensión de un archivo
const extension = path.extname('./cjs/index.js')
console.log(extension)
