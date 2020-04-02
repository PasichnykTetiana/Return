function largestOfFour(arr) {

var arrayarray=[];
for (i=0; i<arr.length; i+=1) {
    var newarray = arr[i];
    // var longest=0;
    var longest=newarray[1];
    for (m=0; m<newarray.length; m+=1){

        if(newarray[m]>longest){
            longest=newarray[m];

        }

    }
    arrayarray.push(longest);

}
return arrayarray;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
