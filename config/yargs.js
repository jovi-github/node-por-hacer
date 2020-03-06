const descripcion = {
    alias: `d`,
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

}



const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('listar', 'Listar las tareas por hacer')
    .command('actualizar', 'Actualiza una tarea pendiente', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}