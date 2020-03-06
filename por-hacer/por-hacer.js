const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {


    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('no pude grabar el registro', err);

    });

}

const getListado = () => {


    try {
        listadoPorHacer = require('../db/data.json');
        //console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
        console.log('La base de datos está vacia');
    }


    return listadoPorHacer;

}


const cargarDB = () => {


    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
        console.log('Inicializacióno de la base de datos');
    }



}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }

    return false;

}

const borrarTarea = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea


}