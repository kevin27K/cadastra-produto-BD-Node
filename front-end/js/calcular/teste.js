function trataNumeros(numero) {
	const string = numero + "" //converte para String
	//compara para saber se é separado por virgula ou ponto
	if (string.indexOf('.') !== -1 || string.indexOf(',') !== -1) {
		//quando tem inteiros e frações . ou

		//substitui , por .
		let stringTemp = string.replace(',', '.')

		//pega o o numero do indice onde está o ponto .
		const index = stringTemp.indexOf('.')

		//separa os inteiros
		const inteiroTemp = stringTemp.slice(0, index);

		//separa fração
		const fracaoTemp = stringTemp.slice(index + 1, stringTemp.length);

		const inteiro = Number(inteiroTemp);
		const fracao = Number(fracaoTemp);

		return { inteiro, fracao }

	} else {
		const inteiro = Number(string)
		return inteiro;
	}

}

const comprimentoBarra = 3;

function calculaBarra(tamanho) {
	tamanho = Number(tamanho)
	let qtdBarra;
	//let inteiro = Number.isInteger(tamanho)

	if (tamanho === 0) {
		console.log('IMPOSSIVEL FAZER A CONTA COM 0 (ZERO) METROS');
	} else if (tamanho <= 3 && tamanho > 0) {
		if (tamanho < 1) {
			console.log(`Um corrimão de ${tamanho} centímetros irá usar 1 BARRA, já que cada barra tem ${comprimentoBarra} metros`);
		}else if (tamanho === 1) {
			console.log(`Um corrimão de 1 metro irá usar 1 BARRA, já que cada barra tem ${comprimentoBarra} metros`);
		} else {
			console.log(`Um corrimão de ${tamanho} metros irá usar 1 BARRA, já que cada barra tem ${comprimentoBarra} metros`);
		}
	} else if (tamanho % comprimentoBarra === 0) {
		qtdBarra = tamanho / comprimentoBarra;
		console.log(`Um corrimão de ${tamanho} metros irá usar ${qtdBarra} BARRAS, já que cada barra tem ${comprimentoBarra} metros`);
	} else {
		console.log('modulo diferente de 0');
		qtdBarra = Math.ceil(tamanho / comprimentoBarra);
		console.log(`Um corrimão de ${tamanho} metros irá usar ${qtdBarra} BARRAS, já que cada barra tem ${comprimentoBarra} metros`);
	}

}

calculaBarra(1.1);