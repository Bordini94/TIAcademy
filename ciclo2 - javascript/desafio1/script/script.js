let produtos = [
    {prodDesc: 'Mamão Papaia', prodPreco : 8.99 },
    {prodDesc: 'Laranja', prodPreco : 2.75 },
    {prodDesc: 'Manga', prodPreco : 2.33 },
    {prodDesc: 'Melão', prodPreco : 3.65 },
    {prodDesc: 'Melancia', prodPreco : 21.00 },
    {prodDesc: 'Nevascaranga', prodPreco : 19.71 },
]

window.onload = function () {

    (() => {
        let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");
        for (let idx in produtos) {
            mostrarProdutoCliente.innerHTML += `<li class = "itemProduto" data-preco=${produtos[idx].prodPreco}> ${produtos[idx].prodDesc} </li> `;
        }
        console.log(mostrarProdutoCliente);
    })(produtos);

    const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompta = document.querySelector("#mostraTotalCompra");
    const armazenaItens = [];
    var totalPedido = 0;

    console.log(itemProduto);

    itemProduto.forEach((item) => {
        item.addEventListener('click', () => {

            if (armazenaItens.indexOf(item.textContent) == -1) {

                li = document.createElement("li");
                li.setAttribute("class", "itemProduto");
                li.setAttribute("data-preco", item.dataset.preco);

                armazenaItens.push(item.textContent);
                cestaCliente.appendChild(li).textContent = item.textContent;
                totalPedido += Number(item.dataset.preco);
                mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            } else {
                alert(`Este item ${item.textContent} já esta na sua cesta!`);
            }
        });
    });
    
    const cestaCliente1 = document.querySelectorAll("#cestaDoCliente");
    const list = document.querySelector("ul#cestaDoCliente");

    cestaCliente1.forEach((item) => {

        item.addEventListener('click', (itemCesta) => {

            var idx = armazenaItens.indexOf(itemCesta.target.textContent);
            if (idx > -1) {

                totalPedido -= Number(itemCesta.target.dataset.preco);

                cestaCliente.removeChild(list.childNodes[idx]);
                armazenaItens.splice(idx, 1);
                mostraTotalCompta.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
        });
    });

};