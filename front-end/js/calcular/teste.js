/* trataNumero, calculaBarra, calculaSobra
const comprimentoBarra = 3;

function trataNumeros(numero) {
	const string = numero + "" //converte para String
	const strNumber = Number(string) //guarda o valor de string convertido para number

	if (Number.isInteger(strNumber) === false) {
		if (string.indexOf('.') !== -1 || string.indexOf(',') !== -1) {
			//quando tem inteiros e frações . ou ,
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
		}
	} else if (Number.isInteger(strNumber) === true) {
		return strNumber;
	}
}

function calculaSobra(tamanho) {
	const inteiro = trataNumeros(tamanho).inteiro;//pega a parte inteira
	const tamanhoModBarra = tamanho % comprimentoBarra;//pega o tamanho passado e tira o modulo do comprimento da barra
	const inteiroModBarra = inteiro % comprimentoBarra;//pega o inteiro passado e tira o modulo do comprimento da barra

	if (Number.isInteger(tamanho) === true) { //se o numero for inteiro
		if (tamanhoModBarra === 0) {
			return 0
		} else {
			sobra = comprimentoBarra - tamanhoModBarra
			return sobra
		}
	} else if (Number.isInteger(tamanho) === false) {//se o numero nao for inteiro
		const proxDivisor3 = inteiro + (comprimentoBarra - inteiroModBarra)
		const metrosUsadosBarra = proxDivisor3 - tamanho;
		sobra = metrosUsadosBarra
		sobra = sobra.toFixed(2)
		return sobra
	}
}

function calculaBarra(tamanho) {
	tamanho = Number(tamanho)
	let qtdBarra;

	if (tamanho === 0) {
		return console.error('IMPOSSIVEL FAZER A CONTA COM 0 (ZERO) METROS');
	} else if (tamanho <= 3 && tamanho > 0 || tamanho === 1) {
		return 1;
	} else if (tamanho % comprimentoBarra === 0) {
		qtdBarra = tamanho / comprimentoBarra;
		return qtdBarra
	} else {
		qtdBarra = Math.ceil(tamanho / comprimentoBarra);
		return qtdBarra;
	}
}

console.log(calculaBarra(15.01));

/**!SECTION
 * 
 * function calculaBarra(tamanho) {
	tamanho = Number(tamanho)
	let qtdBarra;
	//let inteiro = Number.isInteger(tamanho)

	if (tamanho === 0) {
		console.log('IMPOSSIVEL FAZER A CONTA COM 0 (ZERO) METROS');
	} else if (tamanho <= 3 && tamanho > 0) {
		if (tamanho < 1) {
			console.log(`Um corrimão de ${tamanho} centímetros irá usar 1 BARRA, já que cada barra tem ${comprimentoBarra} metros`);
		} else if (tamanho === 1) {
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

 
*/