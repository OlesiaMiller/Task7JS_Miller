var basketContainer = document.getElementById('basket_container');
var total = document.getElementById('total');
var totalPrice = 0;
window.onload = function() {
    var a = JSON.parse(localStorage.getItem("myKey"));
 
 
for (let i = 0; i < a.length; i++) {
    let baskRow = document.createElement('div');
    baskRow.className = 'basket_container-row';
    this.basketContainer.appendChild(baskRow);

    let p = document.createElement('img');
    p.setAttribute('src',a[i].imgAdd);
    p.className = 'img-add'
    baskRow.appendChild(p);

    

    let d = document.createElement('p');
    d.innerHTML = a[i].discAdd;
    d.className = 'disc-add';
    baskRow.appendChild(d);

    let pr = document.createElement('p');
    pr.innerHTML = '$' + a[i].priceAdd;
    pr.className = 'price-add';
    baskRow.appendChild(pr);

    totalPrice += +a[i].priceAdd;
    total.innerHTML = '$' + totalPrice;
}


}