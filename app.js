const argv = require('./config/yargs').argv;
const forToDo = require('./toDo/toDo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = forToDo.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = forToDo.getListado();
        for (const tarea of listado) {
            console.log('======= Por Hacer ======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================\n'.green);
        }
        break;
    case 'actualizar':
        let actualizado = forToDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = forToDo.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}