const productForm = document.getElementById("productForm");
let id = document.getElementById("productId");
let modificar = document.getElementById("modificar");
let productName = document.getElementById('name');
let productDescription = document.getElementById('description');
let productCode = document.getElementById('code');
let productPrice = document.getElementById('price');
let productStock = document.getElementById('stock');
let productThumbnail = document.getElementById('thumbnail')

modificar.addEventListener("click", () => {
    getProduct(id.value)
});

const getProduct = (id) => {
    let url = '/api/products/'+id
  fetch(`/api/products/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      productName.value = data.name;
      productDescription.value = data.description;
      productCode.value = data.code;
      productPrice.value = data.price;
      productStock.value = data.stock;
    });
};

const handleSubmit = (evt, form, route) => {
  evt.preventDefault();
  let url = route+'/'+id.value;
  console.log(url);
  let formData = new FormData(form);
  console.log(formData.get('thumbnail'));
  fetch(url, {
    method: "PUT",
    body: formData,
  });
};

productForm.addEventListener("submit", (e) => {
  handleSubmit(e, e.target, "api/products");
  alert("Agregado");
  productForm.reset();
});