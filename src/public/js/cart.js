let array = document.getElementsByClassName("precios");
let totalPrice = document.createElement("p");
let sendMail = document.getElementById("sendMail");
let total = document.getElementById("total-price");
let orderToSend = document.getElementById("order");
let cartId = document.getElementById("cartId").textContent;
let userMail = document.getElementById("email").textContent;
let addressBuyer = document.getElementById("address-buyer").textContent;

let sum = 0;

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  sum = parseFloat(element.textContent) + sum;
}

let currency = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "ARS",
}).format(sum);

totalPrice.innerHTML = `<h3> Precio Total : ${currency} Pesos `;

total.append(totalPrice);

let emptyCart = (id) => {
  let url = `/api/carts/${id}`;
  Swal.fire({
    title: "Esta seguro?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ok, vaciar carrito",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Borrado!", "Tu carrito se ha vaciado.");
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: null,
      }).then(window.history.back());
    }
  });
};

// sendMail.addEventListener("click", (evt) => {
//   let data = { message: orderToSend.innerHTML, cartId, userMail };
//   let url = "/api/messages/mail";
//   Swal.fire("Orden enviado");
//   handleSubmit(url, data);
// });

sendMail.addEventListener("click", () => {
  let url = "/api/carts/" + cartId + "/products";

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const items = result[0].products.map((item) => {
        return {
          name: item.product.name,
          quantity: item.quantity,
        };
      });

      let data = {
        items: items,
        buyerEmail: userMail,
        buyerAddress: addressBuyer,
      };
      let = url = "api/orders";
      handleSubmit(url, data);
    });
});

const handleSubmit = (url, order) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const sweet = () => {
        Swal.fire({
          title: "Su orden fue enviado",
          confirmButtonText: "Ok",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");

            window.location.href = "/";
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      };
      sweet();
      url = "/api/carts/" + cartId;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
      });
    });
};

let addProduct = (prodID, cartId) => {
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
};

let subtractProduct = (prodID, cartId) => {
  let url = `/api/carts/${cartId}/subtract`;
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
};
