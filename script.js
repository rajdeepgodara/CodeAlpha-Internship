const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let current = 0;

function openLightbox(index){
    current = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[current].src;
}

function closeLightbox(){
    lightbox.style.display = "none";
}

function changeImage(step){

    current += step;

    if(current < 0)
        current = images.length - 1;

    if(current >= images.length)
        current = 0;

    lightboxImg.src = images[current].src;
}

function filterImages(category){

    const items = document.querySelectorAll(".image");

    items.forEach(item=>{

        if(category==="all" || item.classList.contains(category))
            item.style.display="block";
        else
            item.style.display="none";

    });

    document.querySelectorAll(".filter-buttons button").forEach(btn=>{
        btn.classList.remove("active");
    });

    event.target.classList.add("active");
}