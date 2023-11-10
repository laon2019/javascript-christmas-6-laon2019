class OrderService {
  splitMenuInput(menuInput) {
    const menuItems = menuInput.split(",");
    const parsedOrder = [];

    menuItems.forEach((menuItem) => {
      const [menuName, quantity] = menuItem.split("-");
      parsedOrder.push([menuName, parseInt(quantity)]);
    });
    return parsedOrder;
  }
}
export default OrderService;