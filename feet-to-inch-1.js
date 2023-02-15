function feetToInch(feet){
    var inch = feet * 12;
    inch = parseFloat(inch.toFixed(2));
    return inch;
}

var feetvalue = 5.4;

const getInch = feetToInch(feetvalue);
console.log(getInch);