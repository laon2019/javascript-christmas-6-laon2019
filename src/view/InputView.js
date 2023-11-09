import { GAME_MESSAGES, ERROR_MESSAGES } from "../utils/Messages";
import { isNumberInRange, isNumber } from "../utils/Validation";
import { Console } from "@woowacourse/mission-utils";

class InputView {
    async readDate() {
        try {
            const input = await Console.readLineAsync(GAME_MESSAGES.INPUT_DATE);
            if(!isNumberInRange) throw new Error(ERROR_MESSAGES.INVALID_RANGE);
            if(!isNumber) throw new Error(ERROR_MESSAGES.INVALID_NUMBER);
        } catch (error) {
            throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
        }
    }
}
export default InputView;