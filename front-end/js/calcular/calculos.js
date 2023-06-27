const comprimentoBarra = 6;

export function trataNumeros(numero) {
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

export function calculaQtdBarra(tamanho) {
	tamanho = Number(tamanho)
	let qtdBarra = 0;

	if (tamanho === 0) {
		return console.error('IMPOSSIVEL FAZER A CONTA COM 0 (ZERO) METROS');
	} else if (tamanho <= comprimentoBarra && tamanho > 0 || tamanho === 1) {
		return 1;
	} else if (tamanho % comprimentoBarra === 0) {
		qtdBarra = tamanho / comprimentoBarra;
		return qtdBarra
	} else {
		qtdBarra = Math.ceil(tamanho / comprimentoBarra);
		return qtdBarra;
	}
}

export function calculaSobra(tamanho) {
	let sobra = 0;

	const tamanhoModBarra = Number(tamanho) % comprimentoBarra;//pega o tamanho passado e tira o modulo do comprimento da barra
	const tamanhoConvertido = Number(tamanho)
	if (Number.isInteger(tamanhoConvertido) === true) { //se o numero for inteiro
		if (tamanhoModBarra === 0) {
			return 0
		} else {
			sobra = comprimentoBarra - tamanhoModBarra
			return sobra
		}
	} else {//se o numero nao for inteiro
		const inteiro = trataNumeros(tamanho).inteiro;//pega a parte inteira
		const inteiroModBarra = inteiro % comprimentoBarra;//pega o inteiro passado e tira o modulo do comprimento da barra
		const proxDivisor3 = inteiro + (comprimentoBarra - inteiroModBarra)
		const metrosUsadosBarra = proxDivisor3 - tamanho;
		sobra = metrosUsadosBarra
		sobra = sobra.toFixed(2)
		return sobra
	}
}

export function calcularParalelas(corrimao, paralela) {

}

