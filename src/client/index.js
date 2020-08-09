//css
import './styles/header.scss'
import './styles/base.scss'
//Images
import header from './images/header.jpg';
//js

import { formHandler } from './js/formHandler'
import { geonamesAPI } from './js/geonamesRequest'
import { weatherAPI } from './js/weatherbitRequest'
import { pixabayAPI } from './js/pixabayRequest'

export {
    formHandler,
    geonamesAPI,
    weatherAPI,
    pixabayAPI
}