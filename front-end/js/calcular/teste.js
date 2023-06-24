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

function trataNumeros(numero) {
	const string = numero + "" //converte para String
	const strNumber = Number(string) //guarda o valor de string convertido para number

	if (Number.isInteger(strNumber) === false) {
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
		}
	} else if (Number.isInteger(strNumber) === true) {
		return strNumber;
	}
}

function calculaSobra(tamanho) {
	const number = trataNumeros(tamanho);
	let sobra = 0;

	if (Number.isInteger(tamanho) === true) {
	//colocar a logica para um numero inteiro
		console.log('é inteiro');
		if (tamanho % comprimentoBarra === 0) {
			return 0
		} else {
			sobra = comprimentoBarra - (tamanho % comprimentoBarra)
			return sobra
		}
	} else if (Number.isInteger(tamanho) === false) {
		console.log('não é inteiro');
		let cont = 0;
		if (trataNumeros(tamanho).inteiro % comprimentoBarra === 0) {
			cont = comprimentoBarra
		} else {
			for (let x = trataNumeros(tamanho).inteiro; (x % comprimentoBarra !== 0); x++) {
				cont += 1;
			}
		}
		const proxDivisor3 = trataNumeros(tamanho).inteiro + cont
		
		const metrosUsadosBarra = proxDivisor3 - Number(`${trataNumeros(tamanho).inteiro}.${trataNumeros(tamanho).fracao}`);
		sobra = metrosUsadosBarra
		sobra = sobra.toFixed(2)

		return sobra
	}
	
}

console.log(calculaSobra(19.1));
//falta implementar a logica para quando o numero fracionario tiver como
//divisor de 3 em sua parte inteira. 
//OBS condição tem que ser enquanto o numero for diferente dele mesmo (x !==x) e x % 3 !== 0