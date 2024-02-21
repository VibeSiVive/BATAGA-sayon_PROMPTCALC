var paragraph = document.getElementById("result");

input = prompt("1 (+)Addition 2 (-)Subtraction 3 (x)Multiplication 4 (/)Division", "0");
 
if (input == null){
    paragraph.innerHTML = "You pressed Cancel."
}
else {
    x = y = z = 0

    switch(input) {
        case "1":
            x = parseInt(prompt("Enter first number:", "0"));
            y = parseInt(prompt("Enter second number:", "0"));
            z = x + y;
            paragraph.innerHTML = x + " plus " + y + " is " + z;
            break;
        case "2":
            x = parseInt(prompt("Enter first number:", "0"));
            y = parseInt(prompt("Enter second number:", "0"));
            z = x - y;
            paragraph.innerHTML = x + " minus " + y + " is " + z;
            break;
        case "3":
            x = parseInt(prompt("Enter first number:", "0"));
            y = parseInt(prompt("Enter second number:", "0"));
            z = x * y;
            paragraph.innerHTML = x + " times " + y + " is " + z;
            break;
        case "4":
            x = parseInt(prompt("Enter first number:", "0"));
            y = parseInt(prompt("Enter second number:", "0"));
            za = x / y;
            zb = x % y;
            paragraph.innerHTML = x + " divided by " + y + " is " + za + " remainder " + zb;
            break;
        default:
            paragraph.innerHTML = "Invalid operation."
    }
}
