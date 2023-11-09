const GAME_MESSAGES = Object.freeze({
  INPUT_DATE: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  INPUT_MENU: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_RANGE: '[ERROR] 1 ~ 31 사이의 숫자를 입력해주세요.',
  INVALID_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  INVALID_ENGLISH: '[ERROR] 영어는 입력할 수 없습니다.',
  DEFAULT_ERROR: '[ERROR]',
});

export { GAME_MESSAGES, ERROR_MESSAGES };
