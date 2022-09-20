function tennisRanklist(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;

    let tempPoints = 0;
    let winCounter = 0;

    for(let i = 0; i < n; i++) {
        let result = input[index];
        index++;

        if(result === "W") {
            tempPoints += 2000;
            winCounter++;
        } else if (result === "F") {
            tempPoints += 1200;
        } else {
            tempPoints += 720;
        }


    }
    let finalPoints = startPoints + tempPoints;
    let averagePoints = Math.floor(tempPoints / n);
    let winP = winCounter / n * 100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winP.toFixed(2)}%`);
}
tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
