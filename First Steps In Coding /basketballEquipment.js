function basketballEquipment(input){
    let priceMembership = Number(input[0]);
    let priceShoes = priceMembership * 0.60;
    let priceClothes = priceShoes * 0.80;
    let priceBall = priceClothes * 0.25;
    let priceAccessories = priceBall * 0.20;

    let total = priceMembership + priceShoes + priceBall + priceAccessories + priceClothes;

    console.log(total);
}

basketballEquipment(["365"])