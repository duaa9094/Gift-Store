

var password = prompt("Please enter your password");

while (password !== 'duaa') {
    password = prompt("Please enter the correct password");

}



var giftName = prompt("Congratulation you won with us ,please select your gift", 'flower, swatch');

var giftNum = prompt("How many " + giftName + 's you want?', '1,2,3');

var img = '';

for (var i = 1; i <= giftNum; i++) {
    if (giftName == 'flower') {
        img = img + '<img src="images/flower.jpg" style="width:30%;height:30%"/>';
    } else if (giftName == 'swatch') {
        img = img + '<img src="images/swatch.jpg" style="width:30%;height:30%"/>';
    }
}
console.log(img);

document.write(img);


