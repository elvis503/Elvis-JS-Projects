
const toggleSideBar = () => {
    document.querySelector(".sidebar").classList.toggle("show-sidebar")
}

document.querySelector(".sidebar-toggle").addEventListener("click",toggleSideBar);
document.querySelector(".close-btn").addEventListener("click",toggleSideBar);
