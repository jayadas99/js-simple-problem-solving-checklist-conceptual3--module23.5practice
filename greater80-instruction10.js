var numbers = [90, 30, 55, 85, 99, 205, 806, 45, 77]

for(i = 0; i < numbers.length; i++){
    if(numbers[i] > 80){
        console.log(numbers[i]);
    }
}

// alternative writing number = numbers[i]
var numbers = [90, 30, 55, 85, 99, 205, 806, 45, 77]

for(i = 0; i < numbers.length; i++){
    if(numbers[i] > 80){
        var number = numbers[i];
        console.log(number);
    }
}