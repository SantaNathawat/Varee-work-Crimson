window.onscroll = function() {myFunction()};

const header = document.getElementById("myHeader");
const head_of_header = document.getElementById("head_of_header")
const sticky = header.offsetTop;
const sticky_div = header.offsetTop;
        
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        head_of_header.classList.add("sticky_div");
    } else {
        header.classList.remove("sticky");
        head_of_header.classList.add("sticky_div");
    }
}
