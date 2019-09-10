var eventType = prompt("Event type", "casual, semi-formal, or formal?");
var tempFahr = prompt("Enter Temperature", "In degrees Fahrenheit");

if (eventType === "casual") {
    var clothingType = "something comfy";
} else if (eventType === "semi-formal") {
    var clothingType = "a polo";
} else {
    var clothingType = "a suit";
} 

if (tempFahr <= 54) {
    var jacketType = "a coat";
} else if (tempFahr >54 && tempFahr <=70) {
    var jacketType = "a jacket";
} else {
    var jacketType = "no jacket";
}

var result = (`Since you are going to a ${eventType} event and the temperature outisde is ${tempFahr} degrees, I would suggest wearing ${clothingType} with ${jacketType}.`);

console.log(result);
