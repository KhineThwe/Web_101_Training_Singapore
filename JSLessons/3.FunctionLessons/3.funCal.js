function add(num1,num2){
    var result = num1 + num2;
    return result;
}

function subtract(num1,num2){
    var result = num1-num2;
    return result;
}
function multiply(num1,num2){
    var result = num1 * num2;
    return result;
}
function divide(num1,num2){
    var result = num1/num2;
    return result;
}
function main(){
    console.log("Calculator Program!!!");
    var total = 0;
    var first_no = 5
    // parseInt(prompt("Enter first number: "));
    var second_no = 4
    // parseInt(prompt("Enter second number: "));
    var option = 2
    // parseInt(prompt("Press 1 to add\nPress 2 to subtract\nPress 3 to multiply\n Press 4 to divide"));
    

    if(option === 1){
        total = add(first_no,second_no);
    }else if(option === 2){
        total = subtract(first_no,second_no);
    }else if(option === 3){
        total = multiply(first_no,second_no);
    }else if(option === 4){
        total = divide(first_no,second_no);
    }
    console.log(`Total number: ${total}`);
}


main();