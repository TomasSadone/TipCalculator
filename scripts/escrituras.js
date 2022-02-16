const bill = document.getElementById('bill')
const numberOfPeople = document.getElementById('number-of-people')
const customInput = document.getElementById('custom')
const fiveBtn = document.getElementById('five')
const tenBtn = document.getElementById('ten')
const fifteenBtn = document.getElementById('fifteen')
const twentyFiveBtn = document.getElementById('twenty-five')
const fiftyBtn = document.getElementById('fifty')
const resetBtn = document.getElementById('reset')
const tipNumber = document.getElementById('tip-number')
const totalNumber = document.getElementById('total-number')
const cantBZBill = document.getElementById('cant-b-z-bill')
const cantBZPeople = document.getElementById('cant-b-z-people')

let billTotal = 0
let nopNow = 0
let tipTotalValue = 0
let tipPerPersonDisplay = 0
let totalPerPersonDisplay = 0
let multiplier = 0
let previousButton = bill

resetBtn.disabled = true


bill.addEventListener("input", function(){  
    billTotal = bill.value
    tipTotalValue =  billTotal*multiplier
    tipPerPerson()
    totalPerPerson()
    // hideShowCantBeZero()
    enableReset()
});

bill.onchange = () => {
    if (bill.value == 0) {
      cantBZBill.style.visibility = "visible";
      bill.classList.add('input-warning-outline')
    } else {
      cantBZBill.style.visibility = "hidden";
      bill.classList.remove('input-warning-outline')
    }
};  

fiveBtn.addEventListener('click', function(){
    tipAmountCalculator(0.05)
    toggleButtons(fiveBtn)
})

tenBtn.addEventListener('click', function(){
    tipAmountCalculator(0.10)
    toggleButtons(tenBtn)
})

fifteenBtn.addEventListener('click', function(){
    tipAmountCalculator(0.15)
    toggleButtons(fifteenBtn)

})

twentyFiveBtn.addEventListener('click', function(){
    tipAmountCalculator(0.25)
    toggleButtons(twentyFiveBtn)

})

fiftyBtn.addEventListener('click', function(){
    tipAmountCalculator(0.5)
    toggleButtons(fiftyBtn)

})

customInput.addEventListener('input', function(){
    tipAmountCalculator((customInput.value/100))
})


numberOfPeople.addEventListener("input", function(){  
    nopNow = numberOfPeople.value
    tipPerPerson()
    totalPerPerson()
    // hideShowCantBeZero()
    enableReset()
});

numberOfPeople.onchange = () => {
    if (numberOfPeople.value == 0) {
      cantBZPeople.style.visibility = "visible";
      numberOfPeople.classList.add('input-warning-outline')
    } else {
      cantBZPeople.style.visibility = "hidden";
      numberOfPeople.classList.remove('input-warning-outline')
    }
};

resetBtn.addEventListener('click',function(){
    nopNow = 0
    billTotal = 0
    tipTotalValue = 0
    tipPerPersonDisplay = 0
    totalPerPersonDisplay = 0
    multiplier = 0
    bill.value = null
    numberOfPeople.value = null
    customInput.value = null
    previousButton.classList.remove('pressed-percentage')
    tipPerPerson()
    totalPerPerson()
    // hideShowCantBeZero()
    enableReset()
})

function tipAmountCalculator(x){
    tipTotalValue = billTotal*x
    multiplier = x
    tipPerPerson()
    totalPerPerson()
    // hideShowCantBeZero()
    enableReset()
}

function tipPerPerson(){if (nopNow > 0 && tipTotalValue > 0){
    tipPerPersonDisplay = (tipTotalValue/nopNow)
    tipPerPersonDisplay = Math.ceil(tipPerPersonDisplay * 100) / 100
    tipNumber.innerText = '$' + tipPerPersonDisplay
    }
    else if (nopNow > 0 && tipTotalValue == 0){
        tipNumber.innerText = '$0.00'
    }
}

function totalPerPerson(){
    if (nopNow == 0 || billTotal == 0){
        tipNumber.innerText = '$0.00'
        totalNumber.innerText = '$0.00'
}   else if (nopNow > 0 && billTotal){
        totalPerPersonDisplay = tipPerPersonDisplay + billTotal/nopNow
        totalPerPersonDisplay = Math.ceil(totalPerPersonDisplay * 100) / 100
        totalNumber.innerText = '$' + totalPerPersonDisplay
}}

// function hideShowCantBeZero(){
//     if(multiplier == 0 && billTotal == 0 && nopNow == 0){
//         cantBZBill.style.visibility = 'hidden'
//         cantBZPeople.style.visibility = 'hidden'
//         bill.classList.remove('input-warning-outline')
//         numberOfPeople.classList.remove('input-warning-outline')
//     } 
//     else if(billTotal > 0 && nopNow == 0 && multiplier == 0){
//         cantBZPeople.style.visibility = 'visible'
//         numberOfPeople.classList.add('input-warning-outline')

//     }
//     else if(nopNow > 0 && billTotal == 0 && multiplier == 0){
//         cantBZBill.style.visibility = 'visible'
//         bill.classList.add('input-warning-outline')

//     }
//     else if(nopNow > 0 && billTotal > 0 && multiplier == 0){
//         cantBZBill.style.visibility = 'hidden'
//         cantBZPeople.style.visibility = 'hidden'
//         bill.classList.remove('input-warning-outline')
//         numberOfPeople.classList.remove('input-warning-outline')


//     }else if(multiplier > 0){
//         if(billTotal == 0 && nopNow == 0){
//             cantBZBill.style.visibility = 'visible'
//             cantBZPeople.style.visibility = 'visible' 
//             bill.classList.add('input-warning-outline')
//             numberOfPeople.classList.add('input-warning-outline')

   
//         }
//         else if(billTotal > 0 && nopNow == 0){
//             cantBZPeople.style.visibility = 'visible'
//             cantBZBill.style.visibility = 'hidden'
//             bill.classList.remove('input-warning-outline')
//             numberOfPeople.classList.add('input-warning-outline')


//         }
//         else if(nopNow > 0 && billTotal == 0){
//             cantBZBill.style.visibility = 'visible'
//             cantBZPeople.style.visibility = 'hidden'
//             bill.classList.add('input-warning-outline')
//             numberOfPeople.classList.remove('input-warning-outline')


//         }
//         else if(nopNow > 0 && billTotal > 0){
//             cantBZBill.style.visibility = 'hidden'
//             cantBZPeople.style.visibility = 'hidden'
//             bill.classList.remove('input-warning-outline')
//             numberOfPeople.classList.remove('input-warning-outline')
// }   }   }

function enableReset(){
    if(billTotal || multiplier || nopNow > 0){
        resetBtn.disabled = false
        resetBtn.classList.add('reset-enabled')
        resetBtn.classList.remove('reset')
    }
    if(billTotal == 0 && multiplier == 0 && nopNow == 0){
        resetBtn.disabled = true
        resetBtn.classList.remove('reset-enabled')
        resetBtn.classList.add('reset')
    }
}

function toggleButtons(x){
    x.classList.add('pressed-percentage')
    previousButton.classList.remove('pressed-percentage')
    previousButton = x
}