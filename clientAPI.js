var fs          = require('fs');
var request     = require('request');
var path        = require('path');

var oxford = require('project-oxford'),
    client = new oxford.Client(process.env.EMOTION_KEY);

var testImage = path.join(__dirname, 'kld.jpg');

client.emotion.analyzeEmotion({
    path: testImage,
}).then(function (response) {
    console.log(response);
}).error(function (err) {
    console.log(err);
});