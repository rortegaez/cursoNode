/* Un servidor puede hacer dos cosas, recibir una petición y lanzar una respuesta, esto es lo que hacemos aquí:
requiremos http, que es el protocolo para servidores
const server = ... levantamos el servidor donde lo indicamos req y res, recibir petición y lanzar respuesta
server.listen que es para escuchar donde esta ejecutado el servidor */

const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000
/* process.env.PORT es una variable de entorno, entonces cuando queremos ejecutar el archivo devemos poner:
PORT=1234 node http.js
en este caso ejecuta intentando con el puerto que le hemos enviado y si no le hemos enviado lo intenta con el 3000
*/

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola Mundo')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

// si ponemos como puerto el 0, nos va a asignar el primer puerto vacio que encuentre. y donde ahora tenemos ${port}, podemos poner ${server.address().port} y nos diría el puerto que se esta utilizando.
