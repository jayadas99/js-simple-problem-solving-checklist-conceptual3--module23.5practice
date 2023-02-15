function centimeterToMeter(centi){
    var meter = centi / 100;
    meter = parseFloat(meter.toFixed(2));
    return meter;
}

var centimeter = 550;

const getMeter = centimeterToMeter(centimeter);
console.log(getMeter);