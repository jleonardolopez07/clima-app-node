const lugar = require('./lugar/lugar')



const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);



lugar.getLugar(argv.direccion)
    .then(console.log);


const getInfo = async(direccion) => {

    try {
        const info = await lugar.getLugar(direccion);
        return `El clima de ${info.direccion} es de ${info.temp}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${info.direccion}`;
    }

}

getInfo(argv.direccion)
    .then(console.log);
.catch(console.log(e));