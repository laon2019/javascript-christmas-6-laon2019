import MenuItem from './MenuItem';
import { MENU, PRICE } from '../utils/Constans';

class Menu {
  static #APPETIZER = [
    new MenuItem(MENU.SOUP, PRICE.SOUP_PRICE),
    new MenuItem(MENU.TAPAS, PRICE.TAPAS_PRICE),
    new MenuItem(MENU.CAESAR_SALAD, PRICE.CAESAR_SALAD_PRICE),
  ];

  static #MAIN_COURSE = [
    new MenuItem(MENU.T_BONE_STEAK, PRICE.T_BONE_STEAK_PRICE),
    new MenuItem(MENU.BBQ_RIBS, PRICE.BBQ_RIBS_PRICE),
    new MenuItem(MENU.SEAFOOD_PASTA, PRICE.SEAFOOD_PASTA_PRICE),
    new MenuItem(MENU.CHRISTMAS_PASTA, PRICE.CHRISTMAS_PASTA_PRICE),
  ];

  static #DESSERT = [
    new MenuItem(MENU.CHOCO_CAKE, PRICE.CHOCO_CAKE_PRICE),
    new MenuItem(MENU.ICE_CREAM, PRICE.ICE_CREAM_PRICE),
  ];

  static #BEVERAGE = [
    new MenuItem(MENU.ZERO_COLA, PRICE.ZERO_COLA_PRICE),
    new MenuItem(MENU.RED_WINE, PRICE.RED_WINE_PRICE),
    new MenuItem(MENU.CHAMPAGNE, PRICE.CHAMPAGNE_PRICE),
  ];

  static getAllMenuItems() {
    return [
      ...this.#APPETIZER,
      ...this.#MAIN_COURSE,
      ...this.#DESSERT,
      ...this.#BEVERAGE,
    ];
  }

  static getBeverage(){
    return [
      ...this.#BEVERAGE,
    ];
  }

  static getDessert(){
    return [
      ...this.#DESSERT,
    ];
  }
  
  static getMainCourse(){
    return [
      ...this.#MAIN_COURSE,
    ];
  }

  static getMenuItemByName(menuName) {
    const allMenuItems = this.getAllMenuItems();
    const menuItem = allMenuItems.find(item => item.name === menuName);
    return menuItem;
  }

}

export default Menu;