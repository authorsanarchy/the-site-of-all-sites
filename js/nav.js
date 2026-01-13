let arrowId = ["medarrow", "contarrow", "worldarrow"];
let toggleIndex = [1, 1];


function toggleContent(id) {
    let arrow = document.getElementsByClassName(arrowId[id]);
    let content = document.getElementsByClassName("DropContent");


    content[id].classList.toggle("showContent");
    arrow[0].classList.toggle("hideDArrow");
    arrow[1].classList.toggle("showUArrow");
}





