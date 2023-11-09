import InputView from "../view/InputView";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/Messages";

class Controller{
    #date;
  
    async inputDate() {
      try {
        this.#date = await InputView.readDate();
      } catch (error) {
        Console.print(ERROR_MESSAGES.DEFAULT_ERROR);
      }
    }
}
export default Controller;