let toDoList={

    shop:"Shop for goods",
    play:"Play badminton",  
    music:"Listen to Music"
    
}

toDoList.travel = "Go for a Trip";
toDoList.read ="Continue Learning";
console.log(toDoList);
alert("My Current To Do List contains following Items : \n" + JSON.stringify(toDoList));
let completed = prompt("Please select one Task that is completed among your To Do List : ",'shop/play/music/travel/read');
console.log(completed);
alert("Great, The Task " + toDoList[completed] + " have been accomplished!", delete(toDoList[completed]));
console.log(toDoList);
alert("Your current To Do List is : \n" + JSON.stringify(toDoList));





