//css
import './styles/inputForm.scss'
import './styles/base.scss'
import './styles/contCard.scss'
//Images
import header from './images/header.jpg';
//js

import { formHandler } from './js/formHandler'
import { geonamesAPI } from './js/geonamesRequest'
import { weatherAPI } from './js/weatherbitRequest'
import { pixabayAPI } from './js/pixabayRequest'
import { updateUI } from './js/updateUI'

export {
    formHandler,
    geonamesAPI,
    weatherAPI,
    pixabayAPI,
    updateUI
}