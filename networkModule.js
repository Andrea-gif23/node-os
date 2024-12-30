const os = require('os');


function obtenerInfoRed() {
    const interfaces = os.networkInterfaces();
    const resultados = [];

    for (const [interfaz, detalles] of Object.entries(interfaces)) {
        const detallesInterfaz = detalles.map(detalle => ({
            Familia: detalle.family,
            Dirección: detalle.address,
            Interno: detalle.internal
        }));
        resultados.push({ Interfaz: interfaz, Detalles: detallesInterfaz });
    }

    return resultados;
}

module.exports = { obtenerInfoRed };
