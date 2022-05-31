https://teachablemachine.withgoogle.com/models/E5l-_ns44/

camera= document.getElementById("camera");

 Webcam.set({
 width:350,
 height:350,
 image_format:'png',
 png_quality:90
 });

Webcam.attach(' #camera');

function capture()
{
    Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML="<img id='capture_img' src="+data_uri+">/";
  });
}

console.log("ml5 version", ml5.version);

classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_bbYQzJfC/model.json', modelLoaded);
    

