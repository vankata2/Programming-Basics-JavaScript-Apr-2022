function sumSeconds(input){
    let timeOne = Number(input[0]);
    let timeTwo = Number(input[1]);
    let timeThree = Number(input[2]);

    let totalTime = timeOne + timeTwo + timeThree;
    let totalTimeInMin = Math.floor(totalTime / 60);
    let totalTimeInSec = totalTime % 60;

    if (totalTimeInSec < 10){
        console.log(`${totalTimeInMin}:0${totalTimeInSec}`)
    }else{
        console.log(`${totalTimeInMin}:${totalTimeInSec}`)
    }    
}

sumSeconds(["50", "50", "49"])