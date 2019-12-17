const description = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', description)
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente una tarea'
        }
    })
    .command('borrar', 'Borra un elemento por su descripcion', description)
    .help().argv;

module.exports = {
    argv: argv
}