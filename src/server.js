const Hapi = require('@hapi/hapi')

const init = async () => {
	const server = Hapi.Server({
		port: process.env.PORT || 5000,
		host: 'localhost'
	})

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