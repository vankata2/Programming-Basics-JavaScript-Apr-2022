function godzillaVsKong(input) {
  let budget = Number(input[0]);
  let extraCount = Number(input[1]);
  let priceCostume = Number(input[2]);

  let decor = budget * 0.10;

  let priceForClothing = extraCount * priceCostume;

  if (extraCount > 150) {
    priceForClothing = priceForClothing * 0.9;
  }

  let totalMoney = priceForClothing + decor;

  let diff = Math.abs(budget - totalMoney);

  if (totalMoney > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else {
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }

 
}
godzillaVsKong(["20000", "120", "55.5"])
