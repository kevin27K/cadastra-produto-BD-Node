import { calculaQtdBarra, calculaSobra } from './calcular/calculos.js';

const contaBarras = calculaQtdBarra;
const contaSobra = calculaSobra;

async function atualizaLista() {
	try {
		const response = await fetch('http://localhost:3000/produtos');
		const produtos = await response.json();
		montaLista(produtos)
	} catch (error) {
		console.error(error);
	}
}

function montaLista(produtos) {
	const ul = document.querySelector('#lista-produtos');
	ul.innerHTML = '';
	produtos.forEach(produto => {
		const li = document.createElement('li');
		li.textContent = produto.nome;
		li.classList.add('item-cadastrado');
		ul.appendChild(li);
	});
}

window.addEventListener('load', () => {
	atualizaLista();
})

//pega item clicado da lista
document.querySelector('#lista-produtos').addEventListener('click', (e) => {
	const lista = document.querySelector('#lista-produtos')
	const titulo = document.querySelector('.title-h1')
	const produto = e.target;
	lista.innerHTML = `${produto.textContent}`
	lista.style.background = "red"
	lista.style.color = "#fff";

	titulo.textContent = 'Barra Selecionada'

	document.querySelector('.voltar-selecao').style.display = 'block'

})

//voltar para seleçao
document.querySelector('.voltar-selecao').addEventListener('click', () => {
	document.querySelector('.voltar-selecao').style.display = 'none'
	document.querySelector('.title-h1').textContent = 'Selecione a Barra'
	document.querySelector('#lista-produtos').style.background = "#fff";
	document.querySelector('#lista-produtos').style.color = '#000';
	atualizaLista()
})

// fecha e abre a opção de paralela
document.querySelector('#paralela').addEventListener('click', () => {
	const paralela = document.querySelector('#paralela').value;
	if (paralela === 'sim') {
		document.querySelector("#paralela-area").style.display = 'flex';
		return true;
	} else {
		document.querySelector("#paralela-area").style.display = 'none';
		return false;
	}
})

document.querySelector("#fazendo-conta").addEventListener('click', () => {
	const corrimao = document.querySelector("#metragem").value;
	alert(`irá usar ${contaBarras(corrimao)} barras,\nE irá Sobrar ${contaSobra(corrimao)} metros`);
	//alert(`Paralelas serão: ${contaParalela(corrimao)}`)
})


