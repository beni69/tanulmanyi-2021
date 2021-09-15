let url = "/game/";

// start button animation
const button = document.querySelector("#start");
button.addEventListener("click", e => {
    e.preventDefault();
    button.classList.add("btn--clicked");
    document.querySelectorAll("span").forEach(element => {
        element.classList.add("expanded");
    });

    // redirect
    setTimeout(() => {
        window.location.href = url;
    }, 1500);
});

// debug mode
document.addEventListener("keypress", e => {
    const key = e.key;
    console.log(key);

    if (key === "D") {
        url = "/game/?debug=true";
        button.click();
    }
});
