let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
console.log(images)
let max = images.length;

function nextImage() {

    images[currentImageIndex].classList.remove("selected");

    currentImageIndex++;

    if (currentImageIndex >= max) 
        currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected");
}

function previousImage() {

    images[currentImageIndex].classList.remove("selected");

    if (currentImageIndex == 0) 
        currentImageIndex = max - 1;
    
    currentImageIndex--;

    images[currentImageIndex].classList.add("selected");
}


