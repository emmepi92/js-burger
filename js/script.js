var calculateSumButton = document.getElementById("calculate-sum");


calculateSumButton.addEventListener('click', function () {
    
    // set the name for the burger 
    var burgerNameOutput = document.getElementById("burger-name");
    var burgerName = burgerNameOutput.value;
    burgerNameOutput.innerHTML = burgerName;
    
    var sumOutputHtml = document.getElementById("sum-burger");
    var resultSum = 0;    
    var checkIngretients = document.getElementsByClassName("add-ingredients");
    var firstOrder = 'firstorder';
    var secondOrder = 'secondorder';
    var calcolateDiscount = document.getElementById("discount");
    
    
    // calcolate the price for the burger 
    for ( var x = 0; x < checkIngretients.length; x++) {

        if (checkIngretients[x].checked) {

            resultSum += parseInt(checkIngretients[x].value);
        }
    }

    // calcolate the discount for the burger 
    if (calcolateDiscount.value === firstOrder) {
        resultSum *= 0.5;
    }
    else if (calcolateDiscount.value === secondOrder) {
        resultSum *= 0.8;
    }

    sumOutputHtml.innerHTML = ' $ ' +  resultSum;
});










