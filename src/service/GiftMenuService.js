class GiftMenuService {
  provideGift(totalPrice) {
    return totalPrice >= 120000;
  }
}

export default GiftMenuService;
