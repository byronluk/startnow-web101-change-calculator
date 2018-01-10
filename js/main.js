// Write your JavaScript here
var buttonElement = document.getElementById('calculate-change');
buttonElement.addEventListener('click', handleClickEvent);
// buttonElement.addEventListener('click', animateElement);
// Couldn't figure out how to animate images with setInterval

function handleClickEvent(e) {
    amountCalculate();
    function amountCalculate(constant, amount, element) {
        var elementArray = ['twenties', 'tens', 'fives', 'dollars', 'quarters', 'dimes', 'nickels', 'pennies'];
        var amounts = [20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
        var amountDue = document.getElementById('amount-due').value;
        var amountReceived = document.getElementById('amount-received').value;
        var changeDue = amountReceived - amountDue;
        //for loop iterating over array for element name and dollar/coin value const
        for (let i = 0; i < elementArray.length; i++) {
            let pElement = document.getElementById(elementArray[i] + '-output');
            let amountOutput;

            if (changeDue >= amounts[i]) {
                //dollars due to customer
                //updating the value of changeDue each iteration
                amountOutput = Math.floor(changeDue / amounts[i]);
                changeDue = (changeDue % amounts[i]).toFixed(2);
            }
            else {
                amountOutput = 0;
            }
            //updates each <p> element with current value output
            pElement.textContent = amountOutput;
        }
    };  

    document.getElementById('amount-due').value = '';
    document.getElementById('amount-received').value = '';
};

/* function animateElement() {
    var imgElement = document.getElementById('#twenty-bill');
    var pos = 0;
    var id = setInterval(frame, 5);
    
    function frame() {
        if (pos == 150) {
            clearInterval(id);
        }
        else {
            pos++;
            document.getElementById('#twenty-bill').style.left = pos + 'px';
        }
        
    }; 
}; */