const infoHome = {
    vision: "VISION houehroioiaherihaoheirioediaomediamdiameiheihraoihrohaeoirhaierhaoerihoaierhaod",
    history: "HISTORY ieojroiejrijeodijeoijdoeijdoijoijeoidjoejdoeijdojeojdeoijreuoaiupeiawe",
    goals: "GOALS ahosidhasidojoeijoaijdoijeadhaoieuruerpoupeuriueriaeurihehdeuhdiahdiauhd"
}

const btnsTab = document.querySelectorAll(".tab-btn");
const content = document.querySelector(".content");

btnsTab.forEach(btn => {
    btn.addEventListener("click", function(){
        resetButtons();
        btn.classList.toggle("active");
        const current = btn.dataset.id;

        content.innerHTML = infoHome[current];
        console.log(content)
    })
})

const resetButtons = () =>{
    btnsTab.forEach(btn => {
        btn.classList.remove("active")
    })
}
