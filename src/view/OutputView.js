import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES } from "../utils/Messages";

const OutputView = {
    printHello(){
        Console.print(GAME_MESSAGES.HELLO_MESSAGE);
    },
    printEvent(date){
        Console.print(`12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`);
    },
    printMenu() {
        Console.print("<주문 메뉴>");
        // ...
    },
}
export default OutputView;