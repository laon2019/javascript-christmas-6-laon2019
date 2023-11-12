class TotalBenefitsService{
    calculateTotalBenefits(totalBenefits){
        if(totalBenefits>0){
            return `-${totalBenefits}원`;
        }
        return `${totalBenefits}원`;
    }
}
export default TotalBenefitsService;