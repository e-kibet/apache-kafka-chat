const express = require('express');
const producer = require('./chat/producer');

const app = express();

app.post("/chat", async function (req, res, next) {
    producer.sendMessageToUser(req, res, next);
})

app.listen(5000, () => {
    console.log("Server started successfully!");
})