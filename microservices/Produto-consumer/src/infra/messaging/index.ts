
import { PrismaProductRepository } from "../database/prisma/repositories/prisma-product-repository"
import { kafka } from "./kafka/kafka"



async function main() {
  const productRepo = new PrismaProductRepository();

  const consumer = kafka.consumer({ groupId: 'classroom-group', allowAutoTopicCreation: true })

  await consumer.connect()
  await consumer.subscribe({ topic: 'purchases.new-purchase' })

  await consumer.run({
    eachMessage: async ({ message }) => {
      const purchaseJSON = message.value?.toString();
      if (purchaseJSON) {
        const purchaseObj = JSON.parse(purchaseJSON);
        const product = purchaseObj.product;
        productRepo.create(product);
      }
      
    },
  })
}

main().then(() => {
  console.log('[Classroom] Listening to Kafka messages')
})