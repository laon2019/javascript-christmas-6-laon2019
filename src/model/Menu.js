import MenuItem from './MenuItem';

class Menu {
  static #APPETIZER = [
    new MenuItem("양송이수프", 6000),
    new MenuItem("타파스", 5500),
    new MenuItem("시저샐러드", 8000),
  ];

  static #MAIN_COURSE = [
    new MenuItem("티본스테이크", 55000),
    new MenuItem("바비큐립", 54000),
    new MenuItem("해산물파스타", 35000),
    new MenuItem("크리스마스파스타", 25000),
  ];

  static #DESSERT = [
    new MenuItem("초코케이크", 15000),
    new MenuItem("아이스크림", 5000),
  ];

  static #BEVERAGE = [
    new MenuItem("제로콜라", 3000),
    new MenuItem("레드와인", 60000),
    new MenuItem("샴페인", 25000),
  ];

  static getAllMenuItems() {
    return [
      ...this.#APPETIZER,
      ...this.#MAIN_COURSE,
      ...this.#DESSERT,
      ...this.#BEVERAGE,
    ];
  }
}

export default Menu;