var point = 0;
var pic = 0;

function pop() {
    point = point + 1;
    changePic();
    document.getElementById("point").innerHTML = point
}

function changePic() {
    if (pic == 0) {
        pic = 1;
        playsound();
        document.getElementById("pic").style.backgroundImage = "url('IMG/cat2.png')";
        time();
    }
    else {
        pic = 0;
        document.getElementById("pic").style.backgroundImage = "url('IMG/cat1.png')";
    }
}

function time() {
    var check = true;
    let start = Date.now();

    setInterval(function () {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);

            if (diff == 10){
                check = false;
                changePic();
            }
        }
    }, 10);
}
//คำสั่งเล่นเสียง
function playsound(){
    var snd = new Audio("click.mp3");
    snd.play();
    snd.currentTime=0;
}