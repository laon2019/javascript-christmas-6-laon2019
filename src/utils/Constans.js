const EVENT_AMOUNT = Object.freeze({
  CHRISTMAS_DEFAULT_AMOUNT: 1000,
  CHRISTMAS_DAY_AMOUNT: 100,
  WEEKEND_AMOUNT: 2023,
  SPECIAL_EVENT_AMOUNT: 1000,
  BENEFIT_DISCOUNT_THRESHOLD: 120000,
  BENEFIT_DISCOUNT_AMOUNT: 25000,
  PRICE_THRESHOLD: 10000,
  ZERO_AMOUNT: 0,
});

const DATE_CONSTANTS = Object.freeze({
  WEEKEND_DAYS: ["1", "2", "8", "9", "15", "16", "22", "23", "29"],
  SPECIAL_DAYS: ["3", "10", "17", "24", "25", "31"],
});

const EVENT_CONSTANTS = Object.freeze({
  MAX_MENU_QUANTITY: 20,
});

const EVENT_STRING = Object.freeze({
  CHRISTMAS_DISCOUNT: "크리스마스 디데이 할인",
  WEEKEND_DISCOUNT: "주말 할인",
  WEEKDAY_DISCOUNT: "평일 할인",
  SPECIAL_DISCOUNT: "특별 할인",
  GIFT_EVENT: "증정 이벤트",
});

const DATE = Object.freeze({
  CHRISTMAS_EVENT_START_DAY: 1,
  CHRISTMAS_EVENT_END_DAY: 25,
});

const SPLIT_STRING = Object.freeze({
  COMMA_SEPARATOR: ",",
  DASH_SEPARATOR: "-",
});

const NUMBER = Object.freeze({
  ZERO: 0,
  ONE: 1,
  TEN: 10,
});

const PRICE = Object.freeze({
  SOUP_PRICE: 6000,
  TAPAS_PRICE: 5500,
  CAESAR_SALAD_PRICE: 8000,
  T_BONE_STEAK_PRICE: 55000,
  BBQ_RIBS_PRICE: 54000,
  SEAFOOD_PASTA_PRICE: 35000,
  CHRISTMAS_PASTA_PRICE: 25000,
  CHOCO_CAKE_PRICE: 15000,
  ICE_CREAM_PRICE: 5000,
  ZERO_COLA_PRICE: 3000,
  RED_WINE_PRICE: 60000,
  CHAMPAGNE_PRICE: 25000,
});

const MENU = Object.freeze({
  SOUP: "양송이수프",
  TAPAS: "타파스",
  CAESAR_SALAD: "시저샐러드",
  T_BONE_STEAK: "티본스테이크",
  BBQ_RIBS: "바비큐립",
  SEAFOOD_PASTA: "해산물파스타",
  CHRISTMAS_PASTA: "크리스마스파스타",
  CHOCO_CAKE: "초코케이크",
  ICE_CREAM: "아이스크림",
  ZERO_COLA: "제로콜라",
  RED_WINE: "레드와인",
  CHAMPAGNE: "샴페인",
});

export {
  EVENT_AMOUNT,
  DATE_CONSTANTS,
  EVENT_CONSTANTS,
  EVENT_STRING,
  DATE,
  SPLIT_STRING,
  NUMBER,
  MENU,
  PRICE,
};
