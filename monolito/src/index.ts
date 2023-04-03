import express, { Request, Response } from 'express'
import { createProductController } from './http/controllers/products-controller'
import 'dotenv/config';

const app = express()
app.use(express.json())

const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Olá Mundo!')
})

app.post('/products',createProductController);


app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`)
})