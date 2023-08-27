// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// con 1 hay que salir porque puede que haya un problema, con 0 es que todo va correcto
process.exit(1)

// podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
