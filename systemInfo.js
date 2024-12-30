const { obtenerInfoSistema } = require('./osModule');
const { obtenerInfoRed } = require('./networkModule');


console.log('--- Información del Sistema Operativo ---');
const infoSistema = obtenerInfoSistema();
for (const [clave, valor] of Object.entries(infoSistema)) {
    console.log(`${clave}: ${valor}`);
}


console.log('\n--- Información de las Interfaces de Red ---');
const infoRed = obtenerInfoRed();
infoRed.forEach(interfaz => {
    console.log(`Interfaz ${interfaz.Interfaz}:`);
    interfaz.Detalles.forEach(detalle => {
        console.log(`  Familia: ${detalle.Familia}`);
        console.log(`  Dirección: ${detalle.Dirección}`);
        console.log(`  Interno: ${detalle.Interno}`);
    });
});
