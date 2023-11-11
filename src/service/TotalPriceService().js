import Menu from "../model/Menu";

class TotalPriceService {
  calculateTotalPrice(orderMenu) {
    const totalPrice = orderMenu.reduce((acc, [menuName, quantity]) => {
        const menuItem = Menu.getMenuItemByName(menuName);
      if (menuItem) {
        acc += menuItem.price * parseInt(quantity, 10);
      }
      return acc;
    }, 0);

    return totalPrice.toLocaleString();
  }
}

export default TotalPriceService;
