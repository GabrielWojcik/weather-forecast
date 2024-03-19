import axios from 'axios';

interface ProspApi {
    ipv4: string | null
}

export function api( props: ProspApi ) {
    axios.get(`https://api.hgbrasil.com/weather?format=json-cors&key=5d08c842&user_ip=${props.ipv4}`)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.error(error)
    })
}