const container = document.querySelector(".container");
const bgLayer = container;
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
        container.classList.add(`hovered`);

        const images = ["./assets/images/item-1.jpg", "./assets/images/item-2.jpg", "./assets/images/item-3.jpg"];

        container.style.setProperty("--bg-image", `url(${images[index]})`);
        container.style.setProperty("--blur", "10px");

        container.querySelector("style")?.remove();

        const style = document.createElement("style");
        style.innerHTML = `
            .container::before {
                background-image: url(${images[index]});
                opacity: 1;
                filter: blur(50px);
            }
        `;
        document.head.appendChild(style);
    });

    card.addEventListener("mouseleave", () => {
        container.classList.remove(`hovered`);

        const style = document.createElement("style");
        style.innerHTML = `
            .container::before {
                opacity: 0;
                filter: blur(0px);
            }
        `;
        document.head.appendChild(style);
    });
});
