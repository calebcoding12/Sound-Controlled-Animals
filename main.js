dogbarking = 0;
catmeowing = 0;
function startclassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oaG8HCV1Y/model.json", modelloaded);
}
function modelloaded(){
    classifier.classify(gotresults);
}
function gotresults(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        random_r = Math.floor(Math.random()* 255)+1;
        random_g = Math.floor(Math.random()* 255)+1;
        random_b = Math.floor(Math.random()* 255)+1;
        document.getElementById("detection_voice").innerHTML = "Detected Voice of-"+ results[0].label;
        document.getElementById("detection_amount_dog").innerHTML = " Detected Dog-"+ dogbarking +" Detected Cat-" + catmeowing;
        document.getElementById("detection_amount_dog").style.color ="rgb("+ random_r + "," + random_g + "," + random_b + ")";
        document.getElementById("detection_voice").style.color = "rgb("+ random_r + "," + random_g + "," + random_b + ")";
        img = document.getElementById("image_default");
        if (results[0].label == "Barking"){
            img.src = "doggif.gif";
            dogbarking = dogbarking + 1;
        }
        else if (results[0].label == "Meowing"){
            img.src = "catgif.gif";
            catmeowing = catmeowing + 1;
        }
    }

}
