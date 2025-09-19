// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
	const menuButton = document.querySelector("#menuButton");
	const navLinks = document.querySelector(".nav-links");
	if (menuButton && navLinks) {
		menuButton.addEventListener("click", () => {
			const isOpen = navLinks.style.display === "flex";
			navLinks.style.display = isOpen ? "none" : "flex";
		});
	}
});

