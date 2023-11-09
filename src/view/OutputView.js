import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/Messages";

class OutputView {
    static printHello(){
        Console.print(GAME_MESSAGES.HELLO_MESSAGE);
    }
    static printEvent(date){
        Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
    }

    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    }
    // ...
}
export default OutputView;