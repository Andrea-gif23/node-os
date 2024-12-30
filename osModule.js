const os = require('os');

function obtenerInfoSistema() {
    const nombre = os.platform();
    const tipo = os.type();
    const version = os.version();
    const arquitectura = os.arch();
    const cpus = os.cpus().length;
    const memoriaTotalMB = (os.totalmem() / 1024 / 1024).toFixed(2);
    const memoriaLibreMB = (os.freemem() / 1024 / 1024).toFixed(2);

    return {
        Nombre: nombre,
        Tipo: tipo,
        Versión: version,
        Arquitectura: arquitectura,
        CPUs: cpus,
        MemoriaTotal: `${memoriaTotalMB} MB`,
        MemoriaLibre: `${memoriaLibreMB} MB`
    };
}

module.exports = { obtenerInfoSistema };
