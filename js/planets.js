// Placeholder for future interactions (filtering, modals)
document.addEventListener("DOMContentLoaded", () => {
	// Example: click card to highlight
	document.querySelectorAll(".planet-card").forEach(card => {
		card.addEventListener("click", () => {
			card.style.outline = "1px solid rgba(77,243,255,0.6)";
		});
	});
});

