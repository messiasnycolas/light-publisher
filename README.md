# GCP Pub/Sub Light Publisher

Make a localhost http call to publish messages to your GCP pub/sub topic following these steps:
- add your service account json to root

- run `npm install && node src/index.js` **OR** `docker build -d light-publisher . && docker run -p 3007:3007 light-publisher`

- now you're ready to go, try publishing your first message:
- [POST] http:localhost:3007
- body/json:
```json
{
    "topic": "my-topic-name",
    "message": "test message :D" 
}