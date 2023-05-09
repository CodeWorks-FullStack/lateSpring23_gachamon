import { CoinsController } from "./Controllers/CoinsController.js";
import { GachamonController } from "./Controllers/GachamonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

// NOTE this file is the window between your HTML (the user) and the rest of your javascript
class App {
  // valuesController = new ValuesController();

  gachamonController = new GachamonController();

  coinsController = new CoinsController()

}

window["app"] = new App();
