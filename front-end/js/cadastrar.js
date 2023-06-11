const form = document.querySelector('#form-produto');
const url = 'http://localhost:3000/enviar-formulario';

//carrega a lista de produtos cadastrados
window.addEventListener('load', () => {
	atualizaLista();
})

//evento de envio do formulario
form.addEventListener('submit', function (event) {
	event.preventDefault();
	enviaForm(form, url);
});

//carrega a lista cadstrada do servidor
async function atualizaLista() {
	try {
		const response = await fetch('http://localhost:3000/produtos');

		const produtos = await response.json();
		const ul = document.querySelector('#lista-produtos');
		ul.innerHTML = '';
		produtos.forEach(produto => {
			const li = document.createElement('li');
			li.textContent = produto.nome;
			li.classList.add('item-cadastrado');
			ul.appendChild(li);
		});
	} catch (error) {
		console.error(error);
	}
}

//envia os dados do formulario para o servidor
function enviaForm(form, url) {
	// Cria um objeto para armazenar os dados do formulário
	const data = percorreForm(form);

	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 201) {
			atualizaLista()
		}
	};
	xhttp.open('POST', url, true);
	xhttp.setRequestHeader('Content-type', 'application/json');
	xhttp.send(JSON.stringify(data));
}

function percorreForm(form) {
	const data = {};
	for (const input of form.elements) {
		if (input.name) { // verifica se o elemento tem um nome
			data[input.name] = input.value;
		}
	}
	return data;
}
