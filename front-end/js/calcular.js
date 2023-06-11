const comprimentoBarra = 3;

window.addEventListener('load', () => {
	atualizaLista();
})

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

//pega item clicado da lista
document.querySelector('#lista-produtos').addEventListener('click', (e) => {
	alert(e.target.textContent)
})

//calcular
function calcularBarras(corrimao) {
	let qtdBarra;

	if (trataNumeros(corrimao).unidade % comprimentoBarra === 0 && trataNumeros(corrimao).decimal === 0.00) {
		qtdBarra = corrimao / comprimentoBarra;
		return qtdBarra
	} else {
		const qtdBarra = Math.ceil(corrimao / comprimentoBarra);
		return qtdBarra;
	}
}

function calcularSobra(corrimao) {
	//se unidade for divisivel por 3 e decimal igual 0
	if (trataNumeros(corrimao).unidade % comprimentoBarra === 0 && trataNumeros(corrimao).decimal === 0.00) {
		return 0
	}
	//se unidade for divisivel por 3 e decimal maior que 0
	else if (trataNumeros(corrimao).unidade % comprimentoBarra === 0 && trataNumeros(corrimao).decimal !== 0.00) {
		const decimal = `0.${trataNumeros(corrimao).decimal}`
		const sobra = comprimentoBarra - decimal;
		console.log(sobra);
		return sobra;
	}
	//se unidade nao for divisivel 3 e decimal for igual a 0
	else if (trataNumeros(corrimao).unidade % comprimentoBarra !== 0 && trataNumeros(corrimao).decimal === 0.00) {
		const sobra = comprimentoBarra - (trataNumeros(corrimao).unidade % comprimentoBarra);
		return sobra;
	}
	//se unidade nao for divisivel 3 e decimal for maior que 0
	else if (trataNumeros(corrimao).unidade % comprimentoBarra !== 0 && trataNumeros(corrimao).decimal !== 0.00) {
		const decimal = trataNumeros(corrimao).decimal;
		const unidade = trataNumeros(corrimao).unidade;
		const sobra = (comprimentoBarra - (trataNumeros(corrimao).unidade % comprimentoBarra)) - Number(`0.${trataNumeros(corrimao).decimal}`);
		return sobra;
	}
}

function trataNumeros(numero) {
	numero = Number(numero)
	let stringNumber = numero.toFixed(2)
	const decimal = Number(stringNumber.slice(2, 4))
	const unidade = Number(stringNumber.slice(0, 1))
	return { unidade, decimal }
}

function calculaParalelas() {
	//funcao
	const corrimao = document.querySelector("#metragem").value;

	const qtdParalela = document.querySelector("#qtd-paralela").value;

	const barrasParalela = qtdParalela * calcularBarras(corrimao)

	alert(`no total ira usar ${barrasParalela} barras contanto com as paralelas`)
	// fim funcao
}

document.querySelector("#fazendo-conta").addEventListener('click', () => {
	const corrimao = document.querySelector("#metragem").value;
	alert(`irá usar ${calcularBarras(corrimao)} barras,\nE irá Sobrar ${calcularSobra(corrimao)} metros`);

	calculaParalelas()
})

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
