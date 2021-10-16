const searchProduct = document.querySelector("#search-product");
const productsDiv = document.querySelector("#products");

const products = [
    { title : "node js course"},
    { title : "matering react Js course"},
    { title : "advanced javascript (js) course"},
    { title : "git-hub course"},
];
const filters = {
    searchItem : ""
}
function renderProducts (_products, _filter) {
    const filteredProducts = _products.filter((item) => {
        return item.title.toLowerCase().includes(_filter.searchItem.toLowerCase())
    });
    filteredProducts.forEach((element) => {
        const p = document.createElement("p");
        p.textContent = element.title;
        productsDiv.appendChild(p);

    });
}


searchProduct.addEventListener ("input", (e) => {
    filters.searchItem = e.target.value ;
    renderProducts(products, filters)
});




