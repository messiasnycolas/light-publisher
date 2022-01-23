import { Router } from 'express';
import { publishMessage } from './publisher.js';

const MessageHandler = Router();

MessageHandler.post('/', async (req, res, next) => {
    const message = req.body.message;
    const topic = req.body.topic;
    if (!message || !topic) res.status(404).send('Error! Missing properties.');
    else {
        const messageId = await publishMessage(message, topic);
        if (messageId) res.status(200).send({ messageId })
        else res.status(500).send('Internal Server Error');
    }
});

export default MessageHandler;
