Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function capture_img(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/A2DrDk6k7/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
}

function identify_img(){
    img=document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("label").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    
}