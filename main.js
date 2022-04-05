
function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/dgn-61RO9/model.json", modelready);

}
function modelready(){
    classifier.classify(gotresult)
}function gotresult(error,result){
   console.log("gotresult");
   if (error){
       console.log("error");
       
   }
  else {
      console.log(result);
      random_r=Math.floor(Math.random()*255)
      random_g=Math.floor(Math.random()*255)
      random_b=Math.floor(Math.random()*255)
      document.getElementById("result_label").innerHTML="I can hear:"+result[0].label
      document.getElementById("result_accuracy").innerHTML="Accuracy:"+(result[0].confidence*100).toFixed(2)+"%";
      document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")"
 document.getElementById("result_accuracy").style.color="rgb("+random_r+","+random_g+","+random_b+")"
 img1=document.getElementById("alien1");
 img2=document.getElementById("alien2");
 img3=document.getElementById("alien3");
 img4=document.getElementById("alien4");
if(result[0].label=="Clap"){
    img1.src="aliens-01.gif";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
    
}
else if(result[0].label=="Snap"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.gif";
    img3.src="aliens-03.png";
    img4.src="aliens-04.png";
    
}
else if(result[0].label=="Bell"){
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.gif";
    img4.src="aliens-04.png";
    
}
  else {
    img1.src="aliens-01.png";
    img2.src="aliens-02.png";
    img3.src="aliens-03.png";
    img4.src="aliens-04.gif";
    
}
}

}