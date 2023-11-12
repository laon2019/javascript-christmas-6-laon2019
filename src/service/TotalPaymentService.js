class TotalPaymentService {
    calculateTotalPayment(totalPrice, totalBenefits){
        const totalPaymentPrice = totalPrice - totalBenefits
        return `${totalPaymentPrice.toLocaleString()}원`
    }
}
export default TotalPaymentService;