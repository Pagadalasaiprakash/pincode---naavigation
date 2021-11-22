const takeinput = document.querySelector("#searchme");

takeinput.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
        search();
    }
});

function search() {
    const input = takeinput.value;

    window.location.href = "https://www.google.co.in/maps/place/" + input + "/";

}
