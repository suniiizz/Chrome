const bgImg = ["0.jpeg", "1.jpeg", "2.jpeg"];

// Math.floor() - 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
// Math.random() - 0 이상 1 미만의 부동소수점의 난수를 생성
const ramdomBgImg = bgImg[Math.floor(Math.random() * bgImg.length)];

// createElement() - html 요소를 만들어 반환
const Img = document.createElement("img");

Img.src = `img/${ramdomBgImg}`;

document.body.appendChild(Img);
