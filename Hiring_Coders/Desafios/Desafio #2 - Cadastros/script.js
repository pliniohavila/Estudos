

// Save in Local Storage
const Storage = {
    set(key, registers) {
        localStorage.setItem(key, JSON.stringify(registers));
    }
}

function domClient(clients) {
    let dataClient = document.getElementById('data-client');

    //console.log(clients.nameClient);
    const html = ` 
            <td>${clients.nameClient}</td>
            <td>${clients.cpfClient}</td>
            <td>${clients.emailClient}</td>
    `
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    
    dataClient.appendChild(tr);
}

function domProduct(product) {
    let dataClient = document.getElementById('data-product');

    //console.log(clients.nameClient);
    const html = ` 
            <td>${product.productDescription}</td>
            <td>${product.productAmount}</td>
            <td>${product.productPrice}</td>
    `
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    
    dataClient.appendChild(tr);
}

function addClient() {
    // Catch client's data 
    let name  = document.getElementById('name').value;
    let cpf = document.getElementById('cpf').value;
    let email = document.getElementById('email').value;
   
    const clients = [
        {nameClient: name, cpfClient: cpf, emailClient: email}
    ]
    //`Nome: ${name} - CPF: ${cpf} - E-mail: ${email}`
    Storage.set("registers:clients", clients);
    domClient(clients[0]);
}

function addProduct() {
    // Catch client's data 
    let description  = document.getElementById('description').value;
    let amount = document.getElementById('amount').value;
    let price = document.getElementById('price').value;
   
    const products = [
        {productDescription: description, productAmount: amount, productPrice: price}
    ]
    //`Nome: ${name} - CPF: ${cpf} - E-mail: ${email}`
    Storage.set("registers:products", products);
    domProduct(products[0]);
}


