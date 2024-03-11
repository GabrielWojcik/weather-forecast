import axios from 'axios';

export function api() {
    axios.get('https://api.hgbrasil.com/weather?format=json-cors&key=5d08c842')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.error(error)
    })
}