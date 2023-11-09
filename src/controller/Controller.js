import InputView from "../view/InputView";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/Messages";

class Controller {
  #date;
  #menu;

  async inputDate() {
    try {
      this.#date = await InputView.readDate();
      await this.inputMenu();
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

  async inputMenu() {
    try {
      this.#menu = await InputView.readMenu();
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}
export default Controller;