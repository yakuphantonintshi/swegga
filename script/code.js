function calculateTotal(){
    let fPrice = 150.95;
    let mPrice = 180.95;
    let fQuantity = parseInt(document.getElementById('f-Quantity').value || 0);
    let mQuantity = parseInt(document.getElementById('male-quantity').value || 0);
    let fTotal = fPrice * fQuantity
    let mTotal = mPrice * mQuantity
    let pTotal = mTotal + fTotal

    document.getElementById('fTotalPrice').textContent ="R" + fTotal.toFixed(2)
    document.getElementById('maleTotal').textContent = "R" + mTotal.toFixed(2)
    document.getElementById('totalPrice').textContent = "R" + pTotal.toFixed(2)

}
