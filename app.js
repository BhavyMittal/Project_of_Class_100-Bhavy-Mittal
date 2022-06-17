var SpeechRegcognition = window.webkitSpeechRecognition;
var Regcognition = new SpeechRegcognition();

function saveon()
{
    document.getElementById("textbox").innerHTML="";  
    Regcognition.start();  
}

Regcognition.onresult= function(event){

    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;   

    if(content == "take my selfie")
    {
        speak();
    }
    

}


function speak()
{

var synth = window.speechSynthesis; // this api will be used to convert text to speech

  speakData = "Taking your selfie in 10 seconds";

   var utterThis = new SpeechSynthesisUtterance(speakData); // this is the function api that will convert text to speech

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        takeSnapshot();
        save();
    },10000);

}

Webcam.set({
    width : 360,
    height: 250,
    image_format:'png',
    png_quality: 90 // scale 0 to 90
});

camera = document.getElementById("camera");


function takeSnapshot()
{
    Webcam.snap(function(data_uri){
    
       
    document.getElementById("result_1").innerHTML ='<img id="selfie_image" src="'+data_uri+'">';

    document.getElementById("result_2").innerHTML ='<img id="selfie_image" src="'+data_uri+'">';
                            
     document.getElementById("result_3").innerHTML ='<img id="selfie_image" src="'+data_uri+'">';
                                   
    });
}


function save()
{

    image = document.getElementById("selfie_image").src;

    link = document.getElementById("link");

    link.href = image;

    link.click();
}