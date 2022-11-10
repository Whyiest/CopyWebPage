var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("tempnavbar").style.top = "0px";
        document.getElementById("navbar").style.top = "45px";
        document.getElementById("header").style.marginTop = "110px";


    } else {
        document.getElementById("tempnavbar").style.top = "-50px";
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("header").style.marginTop = "150px";
    }
    prevScrollpos = currentScrollPos;
}