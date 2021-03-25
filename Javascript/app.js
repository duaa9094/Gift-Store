alert('Welcome to our Gift Store');



var userName;
userName = prompt('what is your name? ');

alert('Welcome ' + userName);



var giftRecipient =  prompt('Please tell us for whom are you buying the Gift','Men ,Women ,Kids');

if (giftRecipient === 'Men') {
    document.write('<img src="https://ae01.alicdn.com/kf/HTB1ZCOYasrrK1Rjy1zeq6xalFXaT/New-Top-Brand-Men-s-Chronograph-Analog-Quartz-Watch-With-Date-Hands-Waterproof-Stainless-Steel-Wristswatch.jpg" />');
    window.location.href = "#footer";

} else if (giftRecipient === 'Women') {
    document.write('<img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1561488707-b7a9950e-478e-40b2-8e93-c2281fe2f827.jpg?crop=1xw:0.978xh;center,top&resize=480:*" />');
    window.location.href = "#footer";

} else if (giftRecipient === 'Kids') {
    document.write('<img src="https://www.giftcart.com/pub/media/catalog/product/cache/3fba745dcec88e97bfe808bedc471260/c/m/cm02gbgt1155-0.jpg" />');
    window.location.href = "#footer";
    
} else {
    alert('Enjoy your shopping');
}
