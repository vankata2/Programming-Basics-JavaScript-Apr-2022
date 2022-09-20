function foodDelivery(input){
    let priceChicken = 10.35;
    let priceFish = 12.40;
    let priceVeg = 8.15;
    let delivery = 2.50;

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegMenu = Number(input[2]);

    let menuPrice = chickenMenu * priceChicken + fishMenu * priceFish + vegMenu * priceVeg;

    let dessert = menuPrice * 0.20;

    let total = menuPrice + dessert + delivery;

    console.log(total);


}

foodDelivery(["2 ",
"4 ",
"3 "]
)