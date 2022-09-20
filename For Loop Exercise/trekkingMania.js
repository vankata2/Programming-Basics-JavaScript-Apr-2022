function trekkingMania(input) {
    let index = 0;
    let nOfGroups = Number(input[index]);
    index++;
    

    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for (let i = 1; i <= nOfGroups; i++) {
        let nOfPeople = Number(input[index]);
        totalPeople += nOfPeople;
        index++;
        if (nOfPeople <= 5) {
            musala+= nOfPeople;
        }else if (nOfPeople >= 6 && nOfPeople <= 12) {
            monblan+= nOfPeople;
        } else if (nOfPeople >= 13 && nOfPeople <= 25) {
            kilimanjaro+= nOfPeople;
        } else if (nOfPeople >= 26 && nOfPeople <= 40) {
            k2+= nOfPeople;
        } else {
            everest+= nOfPeople;
        }
    }

    let p1 = musala / totalPeople * 100;
    let p2 = monblan / totalPeople * 100;
    let p3 = kilimanjaro / totalPeople * 100;
    let p4 = k2 / totalPeople * 100;
    let p5 = everest / totalPeople * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);


}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])


