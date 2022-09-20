function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let termDeposit = Number(input[1]);
    let annualInterest = Number(input[2]);

    let yearInterest = depositAmount * (annualInterest / 100);
    let monthInterest = yearInterest / 12;
    let total = monthInterest * termDeposit + depositAmount;

    console.log(total);
}