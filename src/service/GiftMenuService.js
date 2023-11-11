class GiftMenuService {
  provideGift(totalPrice) {
    const Price = Number(totalPrice.replace(/,/g, ''));
    if (Price >= 120000) {
      return "샴페인 1개";
    }
    return "없음"
  }
}

export default GiftMenuService;
