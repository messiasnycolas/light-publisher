import { PubSub } from '@google-cloud/pubsub';
const psClient = new PubSub({ keyFilename: './gcp-key.json' });

export async function publishMessage(message, topic) {
    const dataBuffer = Buffer.from(JSON.stringify(message));
    const messageId = await psClient.topic(topic).publishMessage({ data: dataBuffer });
    return messageId;
}
