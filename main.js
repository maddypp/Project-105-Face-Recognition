Webcam.set ({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture() {
    Webcam.snap(function (snapshot) {
        document.getElementById("result").innerHTML = '<img id="result_img" src="'+snapshot+'" / >';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IEKH0W2_C/model.json', modelloaded);

function modelloaded() {
    console.log("model is loaded");
}

function identify() {
    image = document.getElementById("result_img");
    classifier.classify(image,gotresult);
}

function gotresult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
    document.getElementById("member_span").innerHTML = results[0].label;
    document.getElementById("accuracy_span").innerHTML = results[0].confidence.toFixed(3);
}