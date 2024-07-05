const contextMenu = document.querySelector(".wrapper");
const targetElements = document.querySelectorAll(".menu-click, .menu-clickk");
const itemShare = document.querySelector(".item.share");
const langMenu = document.querySelector(".share-menu");

// Function to toggle context menu display
const toggleContextMenu = e => {
    e.preventDefault();
    contextMenu.style.display = "block";
};

// Attach click event listeners to target elements
targetElements.forEach(element => {
    element.addEventListener("click", toggleContextMenu);
});

document.addEventListener("click", e => {
    if (![...targetElements].includes(e.target) && !contextMenu.contains(e.target)) {
        contextMenu.style.display = "none";
    }
});