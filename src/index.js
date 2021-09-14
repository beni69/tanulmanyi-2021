const button = document.querySelector(".btn-grad");
button.addEventListener("click", e => {
    e.preventDefault();
    button.classList.add("btn--clicked");
    document.querySelectorAll("span").forEach(element => {
        element.classList.add("expanded");
    });

    // redirect and reset

    setTimeout(() => {
        button.classList.remove("btn--clicked");
    }, 3500);
    setTimeout(() => {
        window.location.href = "/game/";

        document.querySelectorAll("span").forEach(element => {
            element.classList.remove("expanded");
        });
    }, 1700);
});
