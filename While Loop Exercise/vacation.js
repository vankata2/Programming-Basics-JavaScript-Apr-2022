function vacation(input) {
    let index = 0;
    let needMoneyForVacation = Number(input[index]);
    index++
    let currentMoney = Number(input[index]);
    index++;

    let spendDayCounter = 0;
    let dayCounter = 0;
    let isPossibleToSaveMoney = true;

    while(needMoneyForVacation > currentMoney){
        dayCounter++
        let command = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;

        switch(command) {
            case "spend": currentMoney -= tempMoney; spendDayCounter++;break;
            case "save": currentMoney += tempMoney; spendDayCounter = 0;break;
        }
        if (currentMoney < 0) {
            currentMoney = 0;
        }
        if (spendDayCounter === 5){
            console.log(`You can't save the money.`);
            console.log(dayCounter);
            isPossibleToSaveMoney = false;
            break;
        }
    }
    if(isPossibleToSaveMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
    
}
vacation(["100",
"10",
"spend",
"11",
"save",
"10",
"save",
"50",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"save",
"10",
"spend",
"10",
"save",
"1000"])
