function worldSwimmingPool(input){

let recordInSeconds = Number(input[0]);
let distanceInMeters = Number(input[1]);
let timeInSecondsForOneM = Number(input[2]);

let time = distanceInMeters * timeInSecondsForOneM;
let slow = Math.floor(distanceInMeters / 15) * 12.5;

let totalTime = time + slow

if(totalTime < recordInSeconds){
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
}else{
    let diff = Math.abs(totalTime - recordInSeconds)
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
}

}

worldSwimmingPool(["10464", "1500", "20"])