const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false })); // middleware para processar requisições com JSON

app.post('/enviar-formulario', (req, res) => {
	console.log(req.body); // exibe os dados recebidos no console

	const produto = {
		nome: req.body.nome,
	};

	db.insert(produto, (err, novoProduto) => {
		if (err) {
			console.error(err);
			res.status(500).send('Erro ao inserir produto');
		} else {
			res.status(201).send(novoProduto);
		}
	});
});

app.get('/produtos', (req, res) => {
	db.find({}, (err, produtos) => {
		if (err) {
			console.error(err);
			res.status(500).send('Erro ao buscar produtos');
		} else {
			res.send(produtos);
		}
	});
});


app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
});
