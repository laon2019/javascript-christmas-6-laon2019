class GiftMenuService {
  provideGift(totalPrice) {
    if (totalPrice >= 120000) {
      return "샴페인 1개";
    }
    return "없음"
  }
}

export default GiftMenuService;
