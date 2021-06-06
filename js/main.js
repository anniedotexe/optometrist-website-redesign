var menuIcon = document.getElementById("menu-icon");
const navItems = document.getElementById("nav-items");

if (window.innerWidth <= 849) {
    // Toggle nav menu button
    menuIcon.addEventListener('click', function () {
        navItems.classList.toggle("show");
    })

    // Toggle to close menu if user clicks a link or anywhere else
    document.addEventListener("click", function (event) {
        if ((navItems.classList.contains("show")) && (event.target != menuIcon)) {
            navItems.classList.remove("show");
        }
    });
}