function workingHours(input){

    let time = Number(input[0]);
    let day = input[1];

   

    switch(day){
        
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
             console.log("open");break;
        case "Saturday":
        case "Sunday":
            console.log("closed");break;
            
    }
    if(time >= 10 && time <= 18){
        console.log("open");
    }else{
        console.log("closed");
    }
}
workingHours(["19", "Friday"])