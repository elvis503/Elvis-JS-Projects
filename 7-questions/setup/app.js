//using selectors inside the element
// traversing the dom

const showButton = document.querySelectorAll(".question-btn");

showButton.forEach(btn => btn.addEventListener("click", (e) => {
    const showAnswer = e.target.closest(".question").querySelector(".question-text");
    
    if(e.target.closest(".fa-plus-square") !== null){
        showAnswer.style.display = "block";
        const toggleButton = btn.querySelector(".fa-plus-square");
        toggleButton.classList.remove("fa-plus-square");
        toggleButton.classList.add("fa-minus-square");
    }else{
        showAnswer.style.display = "none";
        const toggleButton = btn.querySelector(".fa-minus-square");
        toggleButton.classList.remove("fa-minus-square");
        toggleButton.classList.add("fa-plus-square");
    }
}));

// OTHER WAY / EASIER WAY
/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text)";
    })
})*/


 


