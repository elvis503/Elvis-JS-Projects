// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();

//*********** fix nav bar after certain scrolling*******
const navBar = document.querySelector("#nav");

const goTopLink = document.querySelector(".top-link");
 
window.addEventListener("scroll", function(){ 
    let scrollTop = window.pageYOffset;
    console.log(scrollTop);
    if(scrollTop >= 120){
        navBar.classList.add("fixed-nav");
    }else{
        navBar.classList.remove("fixed-nav");
    }

    if(scrollTop >= 300){
        goTopLink.classList.add("show-link")
    }else{
        goTopLink.classList.remove("show-link")
    }
})