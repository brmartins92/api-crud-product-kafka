import { Kafka } from 'kafkajs'

if (!process.env.KAFKA_BROKER) {
  //throw new Error('Kafka broker address not set!')
}

export const kafka = new Kafka({
  clientId: 'purchases',
  brokers: ['localhost:9092'],
  ...(process.env.KAFKA_USER ? {
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'zookeeper' ?? '',
      password: '2181' ?? '',
    },
    ssl: true,
  } : {})
})