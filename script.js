let images = [
  "./img/1.jpg",
  "./img/2.jpg",
  "./img/3.jpg",
  "./img/4.jpg",
  "./img/5.jpg",
  "./img/6.jpg",
  "./img/7.jpg",
  "./img/8.jpg",
  "./img/9.jpg",
  "./img/10.jpg",
  "./img/11.jpg",
  "./img/12.jpg",
  "./img/13.jpg",
  "./img/14.jpg",
  "./img/15.jpg",
  "./img/16.jpg",
  "./img/17.jpg",
  "./img/18.jpg",
  "./img/19.jpg",
  "./img/20.jpg",
  "./img/21.jpg",
  "./img/22.jpg",
  "./img/23.jpg",
  "./img/24.jpg",
  "./img/25.jpg",    
  "./img/26.jpg",
  "./img/27.jpg",
  "./img/28.jpg",
  "./img/29.jpg",
  "./img/30.jpg",
  "./img/31.jpg",
  "./img/32.jpg",
  "./img/33.jpg",
  "./img/34.jpg",
  "./img/35.jpg",
  "./img/36.jpg",
  "./img/37.jpg",
  "./img/38.jpg",
  "./img/39.jpg",
  "./img/40.jpg",
];

//more images just need to be added to the img folder and the array images and from here on no change is necessary//

async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html");
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

function clearImage() {
  let image = document.getElementById("images");
  image.innerHTML = ``;
}

function loadImage() {
  clearImage();
  includeHTML();
  let image = document.getElementById("images");
  for (let i = 0; i < images.length; i++) {
    image.innerHTML += generateLoadImage(i);
  }
}

function generateLoadImage(i) {
  return /*html*/ `<img class="img-box" onclick="showImage(${i})" src="${images[i]}" alt="picture">`;
}

function showImage(i) {
  let image = document.getElementById("images");
  document.getElementById("images").classList.remove("img-container");
  document.getElementById("header").classList.add("d-none");
  document.getElementById("footer").classList.add("d-none");
  clearImage();
  image.innerHTML = generateShowImage(i); 
}

function generateShowImage(i) {
  return /*html*/ ` <div id="showfoto" class="show-foto">
  <a onclick="closeShowImage()" href="#"><img class="icon-close" src="./icon/close.png" alt="close"></a>
  <a onclick="showBeforImage(${i})" href="#"><img class="icon-arrow-left" src="./icon/arrow-left.png" alt=""></a>
  <img class="show-foto-img" src=${images[i]} alt="picture" />
  <a onclick="showNextImage(${i})" href="#"><img class="icon-arrow-right" src="./icon/arrow-right.png" alt=""></a>
</div>`;
}

function showBeforImage(i) {
  let image = document.getElementById("images");
  clearImage();
  if (i > 0) {
    i--;
  } else {
    i = images.length - 1; 
  }
  image.innerHTML = generateShowImage(i);
}

function showNextImage(i) {
  let image = document.getElementById("images");
  clearImage();
  if (i < images.length - 1) { 
    i++;
  } else {
    i = 0; 
  }
  image.innerHTML = generateShowImage(i);
}

function closeShowImage() {
  loadImage();
  document.getElementById("images").classList.add("img-container");
  document.getElementById("header").classList.remove("d-none");
  document.getElementById("footer").classList.remove("d-none");
}
