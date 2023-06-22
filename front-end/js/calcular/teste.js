



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
		//quando é só inteiro
		//console.log(false);
		const inteiro = Number(string)
		return inteiro;
	}

}

const numero = trataNumeros('8922331,65')

//const numero = trataNumeros(666.23)

console.log(numero);