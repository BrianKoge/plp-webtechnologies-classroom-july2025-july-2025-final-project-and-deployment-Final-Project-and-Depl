document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("bookingForm");
	const msg = document.getElementById("formMessage");
	if (!form) return;

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const formData = new FormData(form);
		const name = String(formData.get("name") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const planet = String(formData.get("planet") || "").trim();
		const date = String(formData.get("date") || "").trim();

		if (!name || !email || !planet || !date) {
			msg.textContent = "Please fill all required fields.";
			msg.style.color = "#ff9dbf";
			return;
		}
		const emailOk = /.+@.+\..+/.test(email);
		if (!emailOk) {
			msg.textContent = "Enter a valid email address.";
			msg.style.color = "#ff9dbf";
			return;
		}
		msg.textContent = "Thank you! Your booking request has been received.";
		msg.style.color = "#00e5ff";
		form.reset();
	});
});

