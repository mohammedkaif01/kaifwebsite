let nav = document.querySelector("#burger");
let drop = document.querySelector(".dropdown");


let display = true;

nav.addEventListener('click', () => {
    if (display === true) {
        display = "flex";
        drop.style.display = "flex";
        display = false;
    } else {
        display = "none";
        drop.style.display = "none";
        display = true;
    }

    console.log("clicked");
})

