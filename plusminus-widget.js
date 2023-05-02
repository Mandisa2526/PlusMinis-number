//function called plusMinusWidget
//reference string
//get the reference for the increment and decrement button
//reference for the reset button
//reference for number total 
//
var billStringElem = document.querySelector(".billString");
var incrementBtnElem = document.querySelector(".incrementNumberBtn");
var decrementBtnElem = document.querySelector(".decrementNumberBtn");
var resetBtnElem = document.querySelector(".resetBtn");
var billTotalElem = document.querySelector('.billTotal');
var billTotal = 0;

function increment(){
    billTotal += Number(billStringElem.value);
    billTotalElem.innerHTML = billTotal
}
incrementBtnElem.addEventListener('click', increment);

function decrement() {
    if (billTotal >= Number(billStringElem.value)) {
        billTotal -= Number(billStringElem.value);
        billTotalElem.innerHTML = billTotal;
    }
}
decrementBtnElem.addEventListener('click', decrement);

function reset() {
    billTotal = 0;
    billTotalElem.innerHTML = billTotal;
}
resetBtnElem.addEventListener('click', reset);