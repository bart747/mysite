import "cookieconsent";

window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#335"
            },
            "button": {
                "background": "#ff7733"
            }
        },
        "theme": "classic",
        "content": {
            "message": "This website uses cookies to ensure you get the best experience.",
            "href": "/cookies"
        }
    });
});