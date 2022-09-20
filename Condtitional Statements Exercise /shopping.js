function shopping(input){
   let budget = Number(input[0]);
   let n = Number(input[1]);
   let m = Number(input[2]);
   let p = Number(input[3]);
   
   let priceN = n * 250;
   let priceM = m * priceN * 0.35;
   let priceP = p * priceN * 0.10;

   let totalPrice = priceN + priceM + priceP;
    if (n > m){
       totalPrice = totalPrice * 0.85
   
   }
   

   let diff = Math.abs(budget - totalPrice);
   if (totalPrice <= budget){
       console.log(`You have ${diff.toFixed(2)} leva left!`)
   } else {
       console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
   }
}

shopping(["920.45", "3", "1", "1"])