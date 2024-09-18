function changecolour(getcolour){
    let bg = document.querySelector(".bg")
    let selectcolour=getcolour.value;
    let text=getcolour.options[getcolour.selectedIndex].text;
    bg.style.background=selectcolour;
    bg.innerHTML=text;

}