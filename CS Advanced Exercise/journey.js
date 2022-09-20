function journey(input){

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let destination = 0;
    let place = 0;

    switch (season) {
        case "summer" :
            if (budget <= 100) {
                price = budget * 0.30;
                destination = "Bulgaria";
                place = "Camp";
            }else if (budget <= 1000) {
                price = budget * 0.40;
                destination = "Balkans";
                place = "Camp";
            }
            break;
        case "winter":
            if (budget <= 100) {
                price = budget * 0.70;
                destination = "Bulgaria";
                place = "Hotel";
            }else if (budget <= 1000) {
                price = budget * 0.80;
                destination = "Balkans";
                place = "Hotel";
            }
            break;
    }
    if (budget > 1000) {
        price = budget * 0.90;
        destination = "Europe";
        place = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
journey(["50", "summer"])

