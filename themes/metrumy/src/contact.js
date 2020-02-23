
// Since it's about super crucial data I decided to use older JS.
// It's an exception so everything else is setted up with modern JS in mind.

let places = document.getElementsByClassName("liame");

const p1 = "hello";
const p2 = ".bartosz";
const p3 = "liamg";

const addr = p1 + p2 + "@" + rev(p3) + ".com";

function rev(s) {
    return s.split("").reverse().join("");
}

(function create () {
    let i = 0;
    let l = places.length;
    for (i = 0; i < l; i += 1) {
        places[i].innerHTML = "<a href=mailto:" + addr + ">" + addr + "</a>";
    }
}());


