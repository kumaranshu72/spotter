import express from 'express'

const app = express()
const port = 3000
const sayHelloTo = (name: string): string => `Hello ${name}!`

app.get('/', (req, res) => res.send(sayHelloTo('World')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))