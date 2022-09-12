const bgImg = ["0.jpeg", "1.jpeg", "2.jpeg"];

const ramdomBgImg = bgImg[Math.floor(Math.random() * bgImg.length)];

const Img = document.createElement("img");

Img.src = `img/${ramdomBgImg}`;

document.body.appendChild(Img);
