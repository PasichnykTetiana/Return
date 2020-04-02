function largestOfFour(arr) {
var longest=0;
let arrayarray=[];
for (i=0; i<arr.length; i+=1) {
    var newarray = arr[i];
    for (m=0; m<newarray.length; m+=1){

        if(newarray[m]>longest){
            longest=newarray[m];

        }

    }
    arrayarray.push(longest);
    // console.log(longest);
}
return arrayarray;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
