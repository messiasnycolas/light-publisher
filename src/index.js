import express from 'express';
import MessageHandler from './message-handler.js';

const port = process.env.PORT || 3007

const app = express();
app.use(express.json());
app.use('/', MessageHandler);

app.listen(port, () => {
    console.log(`Server up! Listening on port ${port}.`);
});
