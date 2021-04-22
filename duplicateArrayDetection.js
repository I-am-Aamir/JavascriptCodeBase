let enteredElementsArray = new Array();
for (let i=0;i<6;i++){
    enteredElementsArray[i]=prompt("Provide 6 values with few of them being same : ");
}
console.log("The Entered Elements are : " + enteredElementsArray);
alert("The Entered Elements are : " + enteredElementsArray)

let uniqueenteredElementsArray = [];
let duplicateenteredElementsArray = [];

function checkUnique(element){
    if (uniqueenteredElementsArray.includes(element)){
        if(duplicateenteredElementsArray.indexOf(element)==-1){
            duplicateenteredElementsArray.push(element);
        }
    }
    else{
        if(uniqueenteredElementsArray.indexOf(element)==-1){
            uniqueenteredElementsArray.push(element);
        }
    }
}

for (let i=0;i<enteredElementsArray.length;i++){
    checkUnique(enteredElementsArray[i]);
}
console.log("Duplicate elements are : " +duplicateenteredElementsArray);
alert("Duplicate elements are : " +duplicateenteredElementsArray);