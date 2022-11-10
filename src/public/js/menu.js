let eventList = document.querySelectorAll('.addCart')
let cartId = document.getElementById('cartId').textContent;

let url = `/api/carts/${cartId}/products`;

eventList.forEach( (element) => {
    element.addEventListener('click', e => {
        e.preventDefault()
        let prodID = element.value;
        fetch(url,{
            method: "POST",
            body: JSON.stringify({
              product: prodID,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((response) => response.json()
          )
          .then((data) => console.log(data))
    })  
}

)