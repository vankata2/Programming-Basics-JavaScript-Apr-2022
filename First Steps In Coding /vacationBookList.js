function vacationBookList(input){
    let pageNumber = Number(input[0]);
    let page = Number(input[1]);
    let days = Number(input[2]);
    let hours = pageNumber / page;
    let hoursPerDay = hours / days;
    console.log(hoursPerDay);

}

vacationBookList(["212","20","2"])