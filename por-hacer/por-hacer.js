const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    const data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`./db/data.json`, data, err => {
        if (err) throw new Error('No se pudo grabar', err)
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('./../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}


const crear = descripcion => {
    cargarDB();
    
    const porhacer = {
        descripcion,
        completado: false,
    };
    
    listadoPorHacer.push(porhacer);
    guardarDB();
    
    return porhacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    
    const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if ( index >= 0 ) {
        listadoPorHacer[index].completado= completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = descripcion => {
    cargarDB();
    
    const index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);
    if ( index >= 0 ) {
        listadoPorHacer.splice( index, 1 )
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}