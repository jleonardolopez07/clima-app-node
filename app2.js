const request = require('request');
var axios = require("axios").default;


const url = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=b1a2909b12bc04560a8e11d770b6b51c"

request(url, (error, response, body) => {
    const data = JSON.parse(body)
    console.log(data);
})


axios.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=b1a2909b12bc04560a8e11d770b6b51c', {
        responseType: 'json'
    })
    .then(function(res) {
        if (res.status == 200) {
            console.log(res.data);
        }
    })
    .catch(function(err) {
        console.log(err);
    })