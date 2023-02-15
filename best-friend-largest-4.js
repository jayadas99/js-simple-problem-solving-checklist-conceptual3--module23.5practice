// write a function named bestFriend which will return the largest friend"s name from an array.
var friends = ["sajid", "mamun", "kamal", "jubair bin rashed", "chinku"]

function bestFriend(arr){
    var largest = arr[0];
    for(i = 0; i < arr.length; i++){
        if(arr[i].length > largest.length){
            largest = arr[i];
        }
    }
    return largest;
}

var largestFriend = bestFriend(friends);
console.log(largestFriend);