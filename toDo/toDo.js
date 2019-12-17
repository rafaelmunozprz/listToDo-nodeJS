/**
 * @param fs = Importa la libreria para manejar archivos (escritura)
 */
const fs = require('fs');

let listToDo = [];

/**
 * @param guardarDB = Escribe en el archivo data.json los objetos recibidos en la funcion @param crear
 */
const guardarDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    })
}

/**
 * @param cargarDB = Carga en memoria todos los objetos del archivo db/data.json
 */
const cargarDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

/**
 * 
 * @param {*} descripcion = Descripción de la tarea sin realizar
 */
const crear = (descripcion) => {
    cargarDB();
    let forToDo = {
        descripcion,
        completado: false
    };
    listToDo.push(forToDo);
    guardarDB();
    return forToDo;
};

/**
 * @param {*} getListado = Retorna todos los objetos encontrados en el archivo db/data.json
 */
const getListado = () => {
    cargarDB();
    return listToDo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    //findIndex retorna -1 si el elemento no ha sido encontrado y de 0 en adelante retornando la posicion del elemento en caso de ser encontrado
    let index = listToDo.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    if (index >= 0) {
        listToDo[index].completado = completado;
        guardarDB();
        return true;
    }{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    /**
     * Filter crea un nuevo arreglo sin todas las coincidencias encontradas
     */
    let nuevoListado = listToDo.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })
    if(listToDo.length === nuevoListado.length){
        return "NO BORRADO"
    }else{
        listToDo = nuevoListado;
        guardarDB();
        return "Borrado";
    }

}

module.exports = {
    crear: crear,
    getListado: getListado,
    actualizar: actualizar,
    borrar: borrar
}