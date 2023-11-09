import InputView from "../view/InputView";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/Messages";
import OutputView from "../view/OutputView";

class Controller {
  #date;
  #menu;

  async start() {
    try {
      OutputView.printHello();
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }

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

  async printEvent() {
    try {
      OutputView.printEvent(this.#date);
    } catch (error) {
      Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
    }
  }
}
export default Controller;
