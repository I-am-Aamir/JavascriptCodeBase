
function findTheDay(){
    let date = new Date(dateToFind);
    let day = date.getDay();
    if (day == 0 || day == 6){
        alert("Hurray, It's is a Weekend!");
        console.log("Hurray, It's is a Weekend!");
    } else {
        alert("C'mon, We've Work Today!");
        console.log("C'mon, We've Work Today!");
    }
}

let dateToFind = prompt("Please Enter a Date :",'2021/01/16');
console.log(dateToFind);
findTheDay(dateToFind);
