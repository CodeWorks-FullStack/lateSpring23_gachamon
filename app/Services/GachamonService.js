import { appState } from "../AppState.js"
import { saveState } from "../Utils/Store.js";
import { coinsService } from "./CoinsService.js";

// NOTE services are for 'business logic'...anytime I want to manipulate or alter my data (AppState), it will happen in the service layer
class GachamonService {

    setActive(gachamonName) {
        console.log('setting active in the service', gachamonName)
        let foundGachamon = appState.gachamon.find(g => g.name == gachamonName)
        console.log(foundGachamon);
        // NOTE setting and 'saving' the active Gachamon in the AppState
        appState.activeGachamon = foundGachamon
    }

    dispense() {
        if (appState.coins <= 0) {
            window.alert("Get some coins!!")
            return
        }
        coinsService.decreaseCoin()
        let randomIndex = Math.floor(Math.random() * appState.gachamon.length)
        let randomGachamon = appState.gachamon[randomIndex]
        console.log(randomGachamon, 'dispensing random')
        // NOTE if I am accessing the variable in the AppState and assigning value, it will trigger the 'appstate.on' observer
        appState.activeGachamon = randomGachamon
        // appState.myGachamon = appState.myGachamon.push(randomGachamon)
        appState.myGachamon.push(randomGachamon)
        appState.emit('myGachamon')
        // NOTE the first argument is a banana word, and is what we will use for 'finding' what we want to load from local storage
        saveState('myGachamon', appState.myGachamon)
        console.log('my gachamon', appState.myGachamon);
    }

}

// NOTE I don't want to give them access to the entire class.. so I will only export a single instance of this class for their single need
export const gachamonService = new GachamonService()