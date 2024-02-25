
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href="#Studentsbtn"]').addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default behavior of the link
        var section = document.getElementById("beingtxt2"); // Get the section element
        section.style.backgroundColor = "#ffcdd2"; // Change the background color
        section.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    });
});

function closeNavbar() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var collapse = document.querySelector('.navbar-collapse');
    if (collapse.classList.contains('show')) {
        navbarToggler.click();
    }
}
