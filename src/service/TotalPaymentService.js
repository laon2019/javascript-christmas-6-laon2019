class TotalPaymentService {
    calculateTotalPayment(totalPrice, totalBenefits, giftMenu){
        if(giftMenu === "샴페인 1개"){
            const totalPaymentPrice = totalPrice - totalBenefits + 25000;
            return totalPaymentPrice;
        }
        const totalPaymentPrice = totalPrice - totalBenefits;
        return totalPaymentPrice;
    }
}
export default TotalPaymentService;