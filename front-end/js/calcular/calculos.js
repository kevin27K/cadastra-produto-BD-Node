const comprimentoBarra = 3;

export function trataNumeros(numero) {
	numero = Number(numero)
	let stringNumber = numero.toFixed(2)
	const decimal = Number(stringNumber.slice(2, 4))
	const unidade = Number(stringNumber.slice(0, 1))
	return { unidade, decimal }
}

export function calcularBarras(corrimao) {
	let qtdBarra;
	if (trataNumeros(corrimao).unidade % comprimentoBarra === 0 && trataNumeros(corrimao).decimal === 0.00) {
		qtdBarra = corrimao / comprimentoBarra;
		return qtdBarra
	} else {
		const qtdBarra = Math.ceil(corrimao / comprimentoBarra);
		return qtdBarra;
	}
}

export function calcularSobra(corrimao) {
	//se unidade for divisivel por 3 e decimal igual 0
	if (trataNumeros(corrimao).unidade % comprimentoBarra === 0 && trataNumeros(corrimao).decimal === 0.00) {
		return 0
	}
	//se unidade for divisivel por 3 e decimal maior que 0
	else if (trataNumeros(corrimao).unidade % comprimentoBarra === 0 && trataNumeros(corrimao).decimal !== 0.00) {
		const decimal = `0.${trataNumeros(corrimao).decimal}`
		const sobra = comprimentoBarra - decimal;
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

export function calcularParalelas(corrimao, paralela) {
	const barra = calcularBarras(corrimao);
	const sobra = calcularSobra(corrimao);

	const res = barra * paralela
}