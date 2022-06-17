Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach("#camera");
 function take_snapshot(){
     Webcam.snap(function (data_uri){
         document.getElementById("result").innerHTML='<img id="image" src="'+data_uri+'">';
     });
 }
 console.log("ml5 version:", ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json", modelloaded);
 function modelloaded(){
     console.log("model is ready");
 }
 function check(){
     img=document.getElementById("image");
     classifier.classify(img,gotresults);
 }
 function gotresults(error,results){
     if (error){
         console.error(error);
     }
     else{
         console.log(results);
         document.getElementById("result_object_name").innerHTML=results[0].label;
         document.getElementById("result_object_accuracy").innerHTML=(results[0].confidence*100).toFixed(0)+"%";
     }
 }