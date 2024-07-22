let nav = document.querySelector("#burger");
let drop = document.querySelector(".dropdown");

// function showsidebar (){

//     drop.style.display="flex";
//     console.log("clicked");
// }
let display = "flex";

nav.addEventListener('click', () => {
    // drop.style.display="flex";
    if (display === "flex") {
        display = "flex";
        drop.style.display = "flex";

    } else {
        // display = "none";
        drop.style.display = "none";
    }
    console.log("clicked");
})

