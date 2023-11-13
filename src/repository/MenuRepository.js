class MenuRepository {
  #menu;

  constructor() {
    this.#menu = [];
  }

  getMenu() {
    return this.#menu;
  }

  setMenu(menu) {
    this.#menu = menu;
  }
}

export default MenuRepository;