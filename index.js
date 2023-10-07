import express from 'express'

const app = express()
const PORT = process.env.PORT || 5000

const products = [
	{ id: 1, title: 'Tomato', price: 300 },
	{ id: 2, title: 'Apple', price: 100 }
]

app.get('/products', (req, res) => {
	res.send(products)
})
app.get('/products/:id', (req, res) => {
	let product = products.find(p => p.id === +req.params.id)
	if (product) {
		res.send(product)
	} else {
		res.send(404)
	}
})

app.get('/', (req, res) => {
	res.status(200).json('Welcome, your app is working well')
})

app.listen(PORT, () => {
	console.log(`Listen server ${PORT}`)
})
