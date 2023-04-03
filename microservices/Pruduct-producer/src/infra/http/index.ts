import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import { PurchaseProduct } from '../../application/usecases/purchase-product';
import { KafkaMessagingAdapter } from '../messaging/kafka/adapters/kafka-messaging-adapter';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ ok: true })
})

app.post('/register', async (request, response) => {
  const { name, quantity, price, code } = request.body;

  const kafkaMessagingAdapter = new KafkaMessagingAdapter()

  const purchaseProductUseCase = new PurchaseProduct( kafkaMessagingAdapter );

  try {
    await purchaseProductUseCase.execute({
      name,
      quantity,
      price,
      code  
    })

    return response.status(201).send();
  } catch (err) {
    console.error(err);

    return response.status(400).json({
      error: 'Error while creating a new purchase'
    })
  }
})

app.listen(process.env.PORT || 3333, () => {
  console.log('[Purchases] Server running');
});