
function validatePassword (){
    var password = prompt("Please enter your password");

    while (password !== 'duaa') {
        password = prompt("Please enter the correct password.'Hint for testing only , correct password is duaa'");
    
    }
}

 validatePassword();




// This function prompts the user to input a gift name and return the entered value .
function getGiftName(){
    var giftName = prompt("Congratulation you won with us ,please select your gift", 'flower, swatch');
    return giftName;
}

// Here we call getGiftName and store the return value in giftName variable and pass it 
// to drawImages function
// var giftName = getGiftName();


// This function takes a gift name as a parameter and prompts the user to enter the number of gifts 
// then it draws the selected gift as many times as the entered number
function drawImages(giftName){
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
}

//Here we call drawImages function by passing the entered gift name as gift na 
drawImages(getGiftName());

