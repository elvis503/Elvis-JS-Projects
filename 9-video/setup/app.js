// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.


const controlPlayBtn = document.querySelector(".switch-btn")

const video = document.querySelector(".video-container");

let onPlay = true;

window.addEventListener("DOMContentLoaded", function(){
    controlPlayBtn.addEventListener("click", function(){
        if(onPlay){
            video.pause();
        }else{
            video.play();
        }
        onPlay = !onPlay;
        controlPlayBtn.classList.toggle("slide")
    });
})
