const divProductos = document.getElementById("productContainer"); // Solo cambiamos el nombre del div
const alertError = document.getElementById("alerError");
const URLMain = "https://fakestoreapi.com/products/";

function traerProductos(productos) {
    divProductos.innerHTML = ''; 
    
    productos.forEach(res => {
        divProductos.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${res.image}" class="card-img-top" alt="${res.title}">
                    <div class="card-body">
                        <h5 class="card-title">${res.title}</h5>
                        <p class="card-text text-muted">${res.description}</p>
                         <p class="card-text"><strong>Precio: $${res.price}</strong></p>
                    </div>
                </div>
            </div>
        `;
    });
}

function getData() {
    fetch(URLMain)
        .then((response) => {
            console.log(response);
            response.json().then((res) => {
                traerProductos(res);  
            });
        })
        .catch((err) => {      
            alertError.innerText = `Problema al traer la información ${err}`;
            alertError.style.display = "block";   
        });     
}

getData(); 

