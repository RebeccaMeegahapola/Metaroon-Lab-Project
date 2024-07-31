//Comparison
var age = 30;

age == 30; - true
age == "30" - true

age === 30; - true
age === "30"; - false

var totalPrice = 19;

totalPrice > 20; - false
totalPrice < 20; - true
totalPrice <= 20; - true

//Coditionals (if/else)
let totalPrice = 19;
let shippingCost;

if (totalPrice > 20) {
    shippingCost = 0
} else {
    shippingCost = 5
}

console.log("Shipping cost is: " + shippingCost);
console.log(`Shipping cost is:  ${shippingCost}`);

if (totalPrice <= 20) {
    shippingCost = 5
} else {
    shippingCost = 0
}

if (totalPrice <= 10) {
    shippingCost = 5
} else if (totalPrice <= 20) {
    shippingCost = 3
} else {
    shippingCost = 0
}

//not equal (!==)
let userMembership;

if (userMembership !== 'Premium') {
    //show user non-premium contents
    //recommend premium upgrade
} else {
    // show user premium contents
}

//Logical operator
let todayDate;
let birhdayDate;
let birhdayDisplayed;

//And operator
if (todayDate === birhdayDate && birhdayDisplayed === true) {
    //show notification
} else {
    //don't
}

let totalPrice;
let amazonPrime;

// OR operator
if (totalPrice > 20 || amazonPrime === true) {
    //free shipment
} else {
    // no free shipment
}

//Negation [whole condition false]
if (!(totalPrice > 20 || amazonPrime === true)) {
    //free shipment
} else {
    // no free shipment
}

