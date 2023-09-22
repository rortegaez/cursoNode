/* net es como http pero más liviado

*/

const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()// estamos creando el servidor

    server.listen(desiredPort, () => { // donde queremos que escuche al servidor
      const { port } = server.address()
      server.close(() => { // cerramos el servidor
        resolve(port)// devolvemos el port
      })
    })

    server.on('error', (err) => { // si no se puede abrir el port deseado, nos da esto codigo de error
      if (err.code === 'EADDRINUSE') {
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

/*
Si el puerto es el deseado se abre, si el puerto no es el deseado, se ejecuta el server.on('error'), si el error es que el puerto esta ocupado, entonces asignamos el puerto 0 y esto nos dará el primer puerto libre y ser resolvera. Si el error fuera eso, nos devuelve el error
*/

module.exports = { findAvailablePort }
