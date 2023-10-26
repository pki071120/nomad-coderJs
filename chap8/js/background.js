const img=[
  "1.png",
  "2.png",
  "3.png",
];

const randImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randImg}`;

document.body.append(bgImg);