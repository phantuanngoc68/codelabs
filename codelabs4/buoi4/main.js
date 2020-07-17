let linkItem = document.getElementsByClassName("header-title ");
let sectionItem = document.getElementsByClassName("section-content");
console.log(sectionItem.length);
console.log(linkItem.length);
function myfunction(i) {
    // console.log('1');
    var x = document.getElementsByClassName("active");
    if (x.length == 0) {
        sectionItem[i].classList.add("active");
        linkItem[i].childNodes[1].classList.add("active-link");
    }
    else {
        // console.log('2');
        if (x[0].isSameNode(sectionItem[i])) {
            x[0].classList.remove("active");
            linkItem[i].childNodes[1].classList.remove("active-link");
        }
        else {
            x[0].classList.remove("active");
            sectionItem[i].classList.add("active");
            document.getElementsByClassName("active-link")[0].classList.remove("active-link");
            linkItem[i].childNodes[1].classList.add("active-link");
        }
    }


}
for (let i = 0; i < linkItem.length; i++) {
    linkItem[i].addEventListener('click', () => myfunction(i));
}