import Controller from "./controller/Controller";
import { ERROR_MESSAGES } from "./utils/Messages";
class App {
  async run() {
    try {
      const controller = new Controller();
      await controller.inputDate();
    } catch (error) {
      throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}

export default App;
