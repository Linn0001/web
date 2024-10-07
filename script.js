// URLS de los microservicios
const userManagementUrl = 'http://localhost:5001/users';
const productManagementUrl = 'http://localhost:5003/products';

// Función para crear un usuario
document.getElementById('createUserForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch(`${userManagementUrl}/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('userResponse').innerText = `Usuario creado con ID: ${data.user_id}`;
    })
    .catch(error => console.error('Error:', error));
});

// Función para obtener un producto
function getProduct() {
    const productId = document.getElementById('productId').value;
    
    fetch(`${productManagementUrl}/${productId}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('productResponse').innerText = `Producto: ${data.name}, Precio: ${data.price}`;
    })
    .catch(error => {
        document.getElementById('productResponse').innerText = 'Producto no encontrado';
        console.error('Error:', error);
    });
}
