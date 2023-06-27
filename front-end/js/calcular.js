import { calculaQtdBarra, calculaSobra } from './calcular/calculos.js';

const contaBarras = calculaQtdBarra;
const contaSobra = calculaSobra;

const filaMetros = []

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

	let c = 0
	for (let x = 0; x < filaMetros.length; x++) {
		c += Number(filaMetros[x])

	}


	alert(c)


	if (Number(corrimao) > 0) {

	}

	const txtQtdBarra = `irá usar ${contaBarras(corrimao)} barras`

	const txtSobraBarra = `irá sobrar ${contaSobra(corrimao)} mt / cm`

	mudaTexto(document.querySelector('.resultado-qtd-barra'), txtQtdBarra)
	if (Number(corrimao) % 3 !== 0) {
		mudaTexto(document.querySelector('.resultado-sobra-barra'), txtSobraBarra)

		document.querySelector('.resultado-sobra-barra').style.display = 'flex'
	} else {
		document.querySelector('.resultado-sobra-barra').style.display = 'none'
	}

	document.querySelector('.area-resultado').style.display = 'flex'
})

document.querySelector('.btn-ok').addEventListener('click', () => {
	document.querySelector('.area-resultado').style.display = 'none';
})

//add numeros nas divs 
document.querySelector('.btn-add').addEventListener('click', () => {
	const metros = document.querySelector("#metragem").value;

	const div = document.createElement('div')
	div.innerText = metros
	div.classList.add('item-metros')
	document.querySelector('.area-add-metros').appendChild(div)
	filaMetros.push(metros)
})

//salvar na minha biblioteca de codigo
function abreFecha(btn, el) {
	let show = false
	const elemento = el;
	const displayElemento = el.style.display;
	btn.addEventListener('click', () => {
		if (show === false) {
			elemento.style.display = 'none'
			show = true

		} else {
			elemento.style.display = displayElemento;

			console.log(displayElemento);
			show = false
		}
	})
}

function mudaTexto(el, txt) {
	el.innerHTML = txt

}