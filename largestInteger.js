
let integer = [-5, -2, -6, 0, -1];
for (let i=0;i<integer.length;i++){
    //console.log(integer[i]);
    for (let j=0;j<integer.length;j++){
        if(integer[i]>integer[j]){
            let sub = integer[i];
            integer[i]=integer[j];
            integer[j]=sub;
        }
    }
}
console.log("The Largest Integer we've here is : " +integer[0]);
alert("The Largest Integer we've here is : " +integer[0]);




