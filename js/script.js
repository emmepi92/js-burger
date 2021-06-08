var calculateSumButton = document.getElementById("calculate-sum");

calculateSumButton.addEventListener('click', function () {
    
    // set the name for the burger, if the user sets the name 
    var nameBurger = document.getElementById("burger-name");
    var textSumOutput = document.getElementById("text-sum");


    if (nameBurger.value!=='') {
    textSumOutput.innerHTML = '&nbsp;for ' + nameBurger.value;
    nameBurger.style.fontWeight = 'bold';
    nameBurger.style.fontSize = '25px';
    } else {   // for reset, after first click and empty input
        textSumOutput.innerHTML = '';
        nameBurger.style.fontWeight = '400';
        nameBurger.style.fontSize = '15px';
    }
    
    var sumOutputHtml = document.getElementById("sum-burger");
    var checkIngretients = document.getElementsByClassName("add-ingredients");
    var calcolateDiscount = document.getElementById("discount");

    var resultSum = 50;   // seems that the burger's base price start from $ 50, plus addeds   
    
    // calcolate the price for the burger 
    for ( var x = 0; x < checkIngretients.length; x++) {

        if (checkIngretients[x].checked) {

            resultSum += parseInt(checkIngretients[x].value);
        }
    }

    // Calcolate discount with arrays
    var discountList20 = ['disco20', 'anni20', 'pappa20', 'fame20'];
    var discount20 = 0.8;
    var discountList10 = ['disco10', 'anni10', 'pappa10', 'fame10'];
    var discount10 = 0.9;   
    
    var discount = 1;    
    var flagDiscount = false;


    for ( var x = 0; x < discountList20.length ; x++) {
        if (discountList20[x] === calcolateDiscount.value) {
            discount = discount20;
            flagDiscount = true;
        }        
    }

    for (var y = 0; y < discountList10.length; y++) {
        if (discountList10[y] === calcolateDiscount.value) {
            discount = discount10;
            flagDiscount = true;
        }
    }

    if (calcolateDiscount.value.length > 0 && flagDiscount === false) {
        alert("Invalid coupon");
        calcolateDiscount.value = '';
    }
    
    resultSum *= discount;

    sumOutputHtml.innerHTML = ' $ ' +  resultSum.toFixed(2);


    /*----------------------------------------------------
    calcolate the discount for the burger OLD VERSION

    var firstOrder = 'firstorder';
    var firstOrderValue = 0.5;

    var secondOrder = 'secondorder';
    var secondOrderValue = 0.8;

    if (calcolateDiscount.value === firstOrder) {
        resultSum *= firstOrderValue;
    }
    else if (calcolateDiscount.value === secondOrder) {
        resultSum *= secondOrderValue;
    }
---------------------------------------------------*/
});










