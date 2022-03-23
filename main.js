let eat = document.querySelector("#eat")
let drink = document.querySelector("#drink")
let pie = document.querySelector("#pie")
let cymbal = document.querySelector("#cymbal")
let scratch = document.querySelector("#scratch")
let fart = document.querySelector("#fart")
let cat = document.querySelector("#cat")
let music = document.querySelector("#music")
var setId

cat.onclick = (e) => {
    if (330 < e.screenY && e.screenY < 400 && e.screenX > 300 & e.screenX < 430) {
        start('angry', 26)
        music.src = "./mp3/angry.wav";
        music.play()
    } else if (580 < e.screenY && e.screenY < 630 && e.screenX > 300 & e.screenX < 360) {
        start('footRight', 30)
        music.src = "./mp3/p_noo.wav";
        music.play()
    } else if (580 < e.screenY && e.screenY < 630 && e.screenX > 360 & e.screenX < 430) {
        start('footLeft', 30)
        music.src = "./mp3/p_foot4.wav";
        music.play()
    } else if (500 < e.screenY && e.screenY < 600 && e.screenX > 320 & e.screenX < 420) {
        start('stomach', 34)
        music.src = "./mp3/p_belly1.wav";
        music.play()
    } else if (250 < e.screenY && e.screenY < 300 && e.screenX > 210 & e.screenX < 400) {
        start('knockout', 81)
        music.src = "./mp3/p_meuu.wav"
        music.play()
    }
    // console.log(e.screenY);
    //生气 x:300-430 y:330-400
    //左脚 x:300-360 y:530-630
    //右脚 x:360-430 y:530-630
    //肚子：x:320-420 y:520-600
    //敲打  x:210-400 y:250-300
}
function imgIndex(index) {
    if (index < 10) {
        return '0' + index
    } else {
        return index
    }
}
function imgSrc(action, index) {
    return `./img/Animations/${action}/${action}_${imgIndex(index)}.jpg`
}


function start(action, count) {
    let index = 0
    clearInterval(setId)
    setId = setInterval(() => {
        if (++index < count) {
            cat.src = imgSrc(action, index)
        }
        else {
            clearInterval(setId)
        }
    }, 80);

}
eat.onclick = () => {
    start('eat', 40)
    music.src = "./mp3/p_eat.wav"
    music.play()

}
drink.onclick = () => {
    start('drink', 81)
    music.src = "./mp3/drink.wav"
    music.play()
}
cymbal.onclick = () => {
    start('cymbal', 13)
    music.src = "./mp3/cymbal.wav"
    music.play()
}
scratch.onclick = () => {
    start('scratch', 55)
    music.src = "./mp3/scratch_kratzen.wav"
    music.play()
}
fart.onclick = () => {
    start('fart', 28)
    music.src = "./mp3/fart001.wav"
    music.play()
}
pie.onclick = () => {
    start('pie', 24)
    music.src = "./mp3/purr.wav"
    music.play()
}