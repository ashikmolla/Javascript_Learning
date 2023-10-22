const images = [
    './images/pic1.png',
    './images/pic2.png',
    './images/pic3.png'
];


let imgIndex = 0;

const sliderImg = document.getElementById('sliderImg')
setInterval(() => {
    if (imgIndex == images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl)
    sliderImg.setAttribute('src', imgUrl)

    imgIndex++
}, 2000)