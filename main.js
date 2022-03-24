let eat = document.querySelector("#eat")
let drink = document.querySelector("#drink")
let pie = document.querySelector("#pie")
let cymbal = document.querySelector("#cymbal")
let scratch = document.querySelector("#scratch")
let fart = document.querySelector("#fart")
let music = document.querySelector("#music")
let angry = document.querySelector("#angry")
let head = document.querySelector("#head")
let footLeft = document.querySelector("#footLeft")
let footRight = document.querySelector("#footRight")
let stomach = document.querySelector("#stomach")
var setId

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
footLeft.onclick = () => {
    start('footRight', 30)
    music.src = "./mp3/p_noo.wav";
    music.play()
}
footRight.onclick = () => {

    start('footLeft', 30)
    music.src = "./mp3/p_foot4.wav";
    music.play()
}
stomach.onclick = () => {
    start('stomach', 34)
    music.src = "./mp3/p_belly1.wav";
    music.play()
}
angry.onclick = () => {
    start('angry', 26)
    music.src = "./mp3/angry.wav";
    music.play()
}
head.onclick = () => {
    start('knockout', 81)
    music.src = "./mp3/p_meuu.wav"
    music.play()

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