// NOTE controllers are like the 'filter' layer between the users and the rest of your app code
// NOTE anything that a user can interact with...will come through the controller first
// NOTE anytime I want to manipulate or change the DOM (what the user sees) that will happen in the controller

import { appState } from "../AppState.js"
import { gachamonService } from "../Services/GachamonService.js"
import { setHTML } from "../Utils/Writer.js"

function _drawGachamon() {
    // console.log('drawing gachamon')
    // debugger
    let gachamon = appState.gachamon
    let template = ''
    gachamon.forEach(g => template += g.ListTemplate)
    // NOTE this does the same thing as 'document.getElementById.innerHTML
    // NOTE first argument is the HTML id, second arg is the actual HTML
    setHTML('gachamon', template)
}

function _drawActive() {
    console.log('drawing active')
    let activeGachamon = appState.activeGachamon
    setHTML('active', activeGachamon.ActiveTemplate)
}

function _drawMyGachamon() {
    console.log('drawing my gachamon');
    let myGachamon = appState.myGachamon
    let template = ''
    myGachamon.forEach(g => template += g.ListTemplate)
    setHTML('myGachamon', template)
}

export class GachamonController {
    // NOTE if I want something to happen as soon as the page loads (as soon as this controller 'mounts') put it in the constructor
    constructor() {
        console.log('hello from the gachamon controller')
        _drawGachamon()
        _drawMyGachamon()
        // NOTE first arg is the collection in the AppState, second arg is what I want to happen if that collection changed
        appState.on('activeGachamon', _drawActive)
        appState.on('myGachamon', _drawMyGachamon)
    }

    setActive(gachamonName) {
        // console.log('setting active', gachamonName);
        // NOTE we are kicking down to the service, because we are about to modify the AppState
        gachamonService.setActive(gachamonName)
    }

    dispense() {
        console.log('dispensing gachamon');
        gachamonService.dispense()
    }


}