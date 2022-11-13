
let array = document.getElementsByClassName('precios');
let totalPrice = document.createElement('p')

let sum = 0;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = parseFloat(element.textContent) + sum;
}

let currency = (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARS' }).format(sum))

totalPrice.innerHTML = `<h3> Precio Total : ${currency} Pesos `

document.body.append(totalPrice)

let addProduct = (prodID,cartId) => {
  console.log(cartId);
    let url = `/api/carts/${cartId}/products`;
    fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          product: prodID,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
         location.reload();
        });
}


let emptyCart = (cartId) => {
    let url = `/api/carts/${cartId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: null 
      })
    .then( window.history.back())
}