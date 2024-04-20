document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").onsubmit = function(event) {
        event.preventDefault()
        const submitted_color = document.querySelector("#color").value;
        document.querySelector("#text").style.color = submitted_color;
    };
});