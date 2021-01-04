const axios = require("axios").default;

const getLugar = async(dir) => {

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=b1a2909b12bc04560a8e11d770b6b51c&units=metric`
    });
    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data
    const direccion = resp.data.name
    const lat = resp.data.coord.lat
    const long = resp.data.coord.lon
    const temp = resp.data.main.temp

    return {

        direccion,
        lat,
        long,
        temp
    }
}



module.exports = {
    getLugar
}