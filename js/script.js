// discount firstorder & secondorder 
var calculateSumButton = document.getElementById("calculate-sum");

calculateSumButton.addEventListener('click', function () {
    
    // set the name for the burger, if the user sets the name 
    var nameBurger = document.getElementById("burger-name");
    var textSumOutput = document.getElementById("text-sum");


    if (nameBurger.value!=='') {
    textSumOutput.innerHTML = '&nbsp;for ' + nameBurger.value;
    nameBurger.style.fontWeight = 'bold';
    } else {   // for reset if the user put the name and then delete it
        textSumOutput.innerHTML = '';
    }
    
    var sumOutputHtml = document.getElementById("sum-burger");
    var checkIngretients = document.getElementsByClassName("add-ingredients");
    var calcolateDiscount = document.getElementById("discount");

    var resultSum = 50;   // seems that the burger's base price start from $ 50, plus addeds
    var firstOrder = 'firstorder';
    var firstOrderValue = 0.5;
    var secondOrder = 'secondorder';
    var secondOrderValure = 0.8;
    
    
    // calcolate the price for the burger 
    for ( var x = 0; x < checkIngretients.length; x++) {

        if (checkIngretients[x].checked) {

            resultSum += parseInt(checkIngretients[x].value);
        }
    }

    // calcolate the discount for the burger 
    if (calcolateDiscount.value === firstOrder) {
        resultSum *= firstOrderValue;
    }
    else if (calcolateDiscount.value === secondOrder) {
        resultSum *= secondOrderValure;
    }

    sumOutputHtml.innerHTML = ' $ ' +  resultSum.toFixed(2);
});










