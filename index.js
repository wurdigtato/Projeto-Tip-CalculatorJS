
function update() {
    // Inputs
    let yourBillInput = Number(document.getElementById('yourBill').value)
    let tipInput = Number(document.getElementById('tipInput').value)
    let splitInput = Number(document.getElementById('splitInput').value)
    
    //Display
    let tipValue = document.getElementById('tipValue')
    let total = document.getElementById('billTotal')
    let tipPercent = document.getElementById('tipPercent')
    let splitValue = document.getElementById('splitValue')
    let eachBill = document.getElementById('each-bill')

    //Calculations
    let tipTotal = Number(yourBillInput * (tipInput / 100))
    let totalBill = yourBillInput + tipTotal
    let splitCalc = totalBill / splitInput


    tipValue.innerText = `R$ ${tipTotal.toFixed(2)}`
    tipPercent.innerText = `${tipInput}%`
    splitValue.innerText = `${splitInput} Person`
    total.innerText = `R$ ${totalBill.toFixed(2)}`
    eachBill.innerText = `R$ ${splitCalc.toFixed(2)}`

    console.log(totalBill)
}
