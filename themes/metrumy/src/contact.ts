
// Since it's about super crucial data I decided to use older JS.
// It's an exception so everything else is setted up with modern JS in mind.

let places: any = document.getElementsByClassName("liame");

const p1: string = "hello";
const p2: string = ".bartosz";
const p3: string = "liamg";

const addr: string = p1 + p2 + "@" + rev(p3) + ".com";

function rev(s: string): string {
    return s.split("").reverse().join("");
}

(function create (): void {
    let i: number = 0;
    let l: number = places.length;
    for (i = 0; i < l; i += 1) {
        places[i].innerHTML = "<a href=mailto:" + addr + ">" + addr + "</a>";
    }
}());


