
function getInteger(){
    while(true){
        let input=prompt("Enter any Integer : ");
        if (input && isNaN(input)){
            alert("Invalid Input, Please Enter a Integer Value");
        } else if(input) {
            return parseInt(input);
        }
    }
}

let lowestInteger = [];
let inputlowestInteger = prompt('How many Integers you would like to have :');
for(let k=0;k<parseInt(inputlowestInteger);k++){
    lowestInteger[k] = getInteger();
}
console.log(lowestInteger);
for (let i=0;i<lowestInteger.length;i++){
    for (let j=0;j<lowestInteger.length;j++){
        if(lowestInteger[i]>lowestInteger[j]){
            let sub = lowestInteger[i];
            lowestInteger[i]=lowestInteger[j];
            lowestInteger[j]=sub;
        }
    }
}

alert("The Lowest Integer we've here is : " +lowestInteger[lowestInteger.length-1]);




