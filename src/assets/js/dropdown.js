export const menuItems = [
    { label: 'Home', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
    { label: 'Service', options: ['Learn', 'Crossfit', 'Buy'] },
    { label: 'About', options: ['Chi siamo', 'Dove siamo', 'Perche Avada'] },
    { label: 'Video', options: ['CrossFit', 'Yoga', 'Training'] },
    { label: 'Blog', options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'] },
    { label: 'Store', options: ['Attrezzi', 'Shaker', 'Protein', 'Esecizi'] }
];

document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener("click", function () {
            console.log("Dropdown toggle clicked");
            const dropdownMenu = this.nextElementSibling;

            if (dropdownMenu) {
                console.log("Dropdown menu found");
                dropdownMenu.classList.toggle("show");
            } else {
                console.log("Dropdown menu not found");
            }
        });
    });

    function closeAllDropdowns() {
        const dropdownMenus = document.querySelectorAll(".dropdown-menu");
        dropdownMenus.forEach(function (menu) {
            menu.classList.remove("show");
        });
    }

    window.addEventListener("click", function (event) {
        const dropdowns = document.querySelectorAll(".dropdown");
        dropdowns.forEach(function (dropdown) {
            if (!dropdown.contains(event.target)) {
                const dropdownMenu = dropdown.querySelector(".dropdown-menu");
                if (dropdownMenu) {
                    dropdownMenu.classList.remove("show");
                }
            }
        });
    });
});
