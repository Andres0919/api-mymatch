const Hapi = require('@hapi/hapi')
const { Client } = require('pg');

const init = async () => {
	const server = Hapi.Server({
		port: process.env.PORT || 5000,
		host:'0.0.0.0'
  })
    
	const client = new Client({
		connectionString: process.env.DATABASE_URL,
		ssl: {
			rejectUnauthorized: false
		}
	});

	client.connect();

	client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
		if (err) throw err;
		for (let row of res.rows) {
			console.log(JSON.stringify(row));
		}
		client.end();
	});


	await server.start()

	console.log('Server running on :>> ', server.info.uri);


	server.route({
		method: 'GET',
		path: '/',
		handler: (req, h) => {
				return '<h1>Hello world!</h1>'
		}
	})
}

module.exports = {
    init
}