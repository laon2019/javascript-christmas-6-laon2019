const GAME_MESSAGES = Object.freeze({
  INPUT_DATE: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  INPUT_MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
  HELLO_MESSAGE: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_RANGE: '[ERROR] 1 ~ 31 사이의 숫자를 입력해주세요.',
  INVALID_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  INVALID_ENGLISH: '[ERROR] 영어는 입력할 수 없습니다.',
  INVALID_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  INVALID_MENU: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  DEFAULT_ERROR: '[ERROR]',
});

const ERROR_MENU_MESSAGES = Object.freeze({
  MAX_ORDER_COUNT: '[ERROR] 한 번에 최대 20개까지만 주문 가능합니다.',
  INVALID_MENU: '[ERROR] 메뉴판에 없는 메뉴를 주문했습니다',
  INVALID_QUANTITY: '[ERROR] 메뉴의 개수는 1 이상의 정수만 입력되어야 합니다',
  INVALID_NUMBER: '[ERROR] 메뉴의 개수는 숫자를 입력해야 합니다.',
  DUPLICATE_MENU: '[ERROR] 중복된 메뉴를 주문했습니다.',
});

const VIEW_MESSAGES = Object.freeze({
  ORDER_MENU_TITLE: '<주문 메뉴>',
  TOTAL_PRICE_TITLE: '<할인 전 총주문 금액>',
  GIFT_MENU_TITLE: '<증정 메뉴>',
  BENEFITS_TITLE: '<혜택 내역>',
  TOTAL_BENEFITS_PRICE_TITLE: '<총혜택 금액>',
  TOTAL_PAYMENT_PRICE_TITLE: '<할인 후 예상 결제 금액>',
  EVENT_BADGE_TITLE: '<12월 이벤트 배지>',
  NEW_LINE: '\n',
});

export { GAME_MESSAGES, ERROR_MESSAGES, ERROR_MENU_MESSAGES, VIEW_MESSAGES };
