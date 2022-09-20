function salary(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    let index = 2;

    for (let i = 1; i <= tabs; i++) {
        let page = input[index];
        index++;

        switch (page) {
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;

        
        }
    if (salary <= 0) {
    console.log(`You have lost your salary.`);
    }
    }
    
}
    if (salary > 0) {
        console.log(salary);
}
salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

