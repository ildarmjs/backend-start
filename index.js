const express = require('express')

const app = express()
const PORT = 5000

app.get('/home', (req, res) => {
	res.status(200).json('Welcome, your app is working well')
})

app.listen(PORT, () => {
	console.log(`Listen server ${PORT}`)
})
