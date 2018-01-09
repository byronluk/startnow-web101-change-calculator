// Write your JavaScript here
var buttonElement = document.getElementById('calculate-change');
buttonElement.addEventListener('click', handleClickEvent);
// buttonElement.addEventListener('click', animateElement);
// Couldn't figure out how to animate images with setInterval

function handleClickEvent(e) {
    function amountCalculate(constant, amount, element) {
        let elementArray = ['twenties', 'tens', 'fives', 'dollars', 'quarters', 'dimes', 'nickels', 'pennies'];
        let amounts = [20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
        let amountDue = document.getElementById('amount-due').value;
        let amountReceived = document.getElementById('amount-received').value;
        let changeDue = amountReceived - amountDue;
        
        //for loop iterating over array for element name and dollar/coin value const
        for (var i = 0; i < elementArray.length; i++) {
            if (changeDue >= amounts[i]) {
                var amountOutput = Math.floor(changeDue / amounts[i]);
                //dollars due to customer
                changeDue = changeDue % amounts[i];
                changeDue = changeDue.toFixed(2);
            }
            else {
                var amountOutput = 0;
            }
            var pElement = document.getElementById(elementArray[i] + '-output');
            pElement.textContent = amountOutput;
            //print value output
        }
    };  
    amountCalculate();

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