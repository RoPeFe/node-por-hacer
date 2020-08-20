const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcción de la tarea por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marcar como completado o pendiente'
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv 
}
