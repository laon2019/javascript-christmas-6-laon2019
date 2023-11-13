import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, VIEW_MESSAGES } from "../utils/Messages";
import { EVENT_AMOUNT, EVENT_STRING, EVENT_BEDGE_AMOUNT, EVENT_BEDGE } from "../utils/Constans";

const OutputView = {
  print(message) {
    Console.print(message);
  },
  printHello() {
    Console.print(GAME_MESSAGES.HELLO_MESSAGE);
  },
  printEvent(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
    Console.print(VIEW_MESSAGES.NEW_LINE);
  },
  printMenu(menu) {
    Console.print(VIEW_MESSAGES.ORDER_MENU_TITLE);
    menu.forEach(([item, quantity]) => {
      Console.print(`${item} ${quantity}개`);
    });
    Console.print(VIEW_MESSAGES.NEW_LINE);
  },
  printTotalPrice(price) {
    Console.print(VIEW_MESSAGES.TOTAL_PRICE_TITLE);
    Console.print(`${price.toLocaleString()}원`);
    Console.print(VIEW_MESSAGES.NEW_LINE);
  },
  printGiftMenu(totalEvents) {
    const benefitDiscountPrice = totalEvents[EVENT_STRING.GIFT_EVENT];
    Console.print(VIEW_MESSAGES.GIFT_MENU_TITLE);
    if (benefitDiscountPrice === EVENT_AMOUNT.BENEFIT_DISCOUNT_AMOUNT) {
      Console.print(EVENT_STRING.GIFT_CHAMPAGNE);
    }
    if (benefitDiscountPrice !== EVENT_AMOUNT.BENEFIT_DISCOUNT_AMOUNT) {
      Console.print(EVENT_STRING.GIFT_NONE);
    }
    Console.print(VIEW_MESSAGES.NEW_LINE);
  },
  printTotalEvents(totalEvents) {
    Console.print(VIEW_MESSAGES.BENEFITS_TITLE);
    if (!totalEvents) Console.print(EVENT_STRING.GIFT_NONE);
    if (totalEvents) {
      Object.entries(totalEvents).forEach(([event, discount]) => {
        if (discount > EVENT_AMOUNT.ZERO_AMOUNT) {
          const formattedDiscount = discount.toLocaleString();
          const formattedEvent = `${event}: -${formattedDiscount}원`;
          Console.print(formattedEvent);
        }
      });
    }
    Console.print(VIEW_MESSAGES.NEW_LINE);
  },
  printTotalBenefitsPrice(price) {
    Console.print(VIEW_MESSAGES.TOTAL_BENEFITS_PRICE_TITLE);
    if (price > EVENT_AMOUNT.ZERO_AMOUNT) {
      Console.print(`-${price.toLocaleString()}원`);
    }
    if (price <= EVENT_AMOUNT.ZERO_AMOUNT) {
      Console.print(`${price}원`);
    }
    Console.print(VIEW_MESSAGES.NEW_LINE);
  },
  printTotalPaymentPrice(price) {
    Console.print(VIEW_MESSAGES.TOTAL_PAYMENT_PRICE_TITLE);
    Console.print(`${price.toLocaleString()}원`);
    Console.print(VIEW_MESSAGES.NEW_LINE);
  },
  printEventBadge(totalPaymentPrice) {
    Console.print(VIEW_MESSAGES.EVENT_BADGE_TITLE);
    if (totalPaymentPrice >= EVENT_BEDGE_AMOUNT.SANTA_AMOUNT) Console.print(EVENT_BEDGE.SANTA);
    if (totalPaymentPrice >= EVENT_BEDGE_AMOUNT.TREE_AMOUNT) Console.print(EVENT_BEDGE.TREE);
    if (totalPaymentPrice >= EVENT_BEDGE_AMOUNT.SANTA_AMOUNT) Console.print(EVENT_BEDGE.STAR);
    if (totalPaymentPrice < EVENT_BEDGE_AMOUNT.SANTA_AMOUNT) Console.print(EVENT_STRING.GIFT_NONE);
  },
};
export default OutputView;
