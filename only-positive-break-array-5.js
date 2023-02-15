// write a function named onlyPositive which will take an array of numbers as parameter and break if there is any negative numbers in array and return the positive numbers upto break within a new array

var numbers =[45, 87, 95, 11, 63, -56, 71, 28];

var positives = [];
function onlyPositive(nums){
    for(i = 0; i < nums.length; i++){
        var num = nums[i];
        if(num < 0){
            break;
        }
        else{
            positives.push(num);
        }
    }
    return positives;
}

var numbers =[45, 87, 95, 11, 63, -56, 71, 28];

var positiveValues = onlyPositive(numbers);
console.log(positiveValues);