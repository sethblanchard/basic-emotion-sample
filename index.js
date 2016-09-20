var fs          = require('fs');
var request     = require('request');

var testImage = 'zoolander.jpg';

var emotionStreamOpts = {
	'url': 'https://api.projectoxford.ai/emotion/v1.0/recognize',
	headers: {
	'Content-Type': 'application/octet-stream',
	'Ocp-Apim-Subscription-Key': process.env.EMOTION_KEY || 'Your Key Here'
	}
}

fs.createReadStream(testImage)
    .pipe(
        request.post(emotionStreamOpts, function (error, response, body) {
        if (error) {
            console.log(response, error);
            return;
        }

        console.log('File Steam file')
        
       //console.log(response);
        console.log(body);
    }));



var emotionUrlOpts = {
	'url': 'https://api.projectoxford.ai/emotion/v1.0/recognize',
    'body': "{'url' : 'http://www.highlandernews.org/wp-content/uploads/2016/02/radar.zoolander.paramountpictures-1024x768.jpg'}",
	headers: {
	//'Content-Type': 'application/octet-stream',
	'Content-Type': 'application/json',
	'Ocp-Apim-Subscription-Key': process.env.EMOTION_KEY || 'Your Key Here'
	}
}

request.post(emotionUrlOpts, function (error, response, body) {
    if (error) {
        console.log(response, error);
        return;
    }

    console.log('From URL')
    //console.log(response);
    console.log(body);
});

var visionOpts = {
	'url': 'https://api.projectoxford.ai/vision/v1.0/models/celebrities/analyze?visualFeatures=faces,categories,description&details=celebrities' ,
	headers: {
	'Content-Type': 'application/octet-stream',
	'Ocp-Apim-Subscription-Key': process.env.VISION_KEY
	}
};



fs.createReadStream(testImage)
    .pipe(request.post(visionOpts, function (error, response, body) {
        if (error) {
            console.log(response, error);
            return;
        }

        console.log('Vision Results');
        console.log(body);

    }));