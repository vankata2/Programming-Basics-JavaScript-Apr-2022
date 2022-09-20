function fishTank(input){
    let lengthInCm = Number(input[0]);
    let widthInCm = Number(input[1]);
    let heightInCm = Number(input[2]);
    let percentage = Number(input[3]);

    let tankSize = lengthInCm * widthInCm * heightInCm / 1000;
    let takenSpace = tankSize * (percentage /100)


    let tankCapacity = tankSize - takenSpace;
    
    console.log(tankCapacity)


}

fishTank(["85","75","47","17"])