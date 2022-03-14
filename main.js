
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

}
