/**
 * Touch Image Swap for Services Section
 * Toggles between img1 and img2 on touch devices
 */
(function () {
	"use strict";

	// Check if device supports touch
	const isTouchDevice =
		"ontouchstart" in window ||
		navigator.maxTouchPoints > 0 ||
		navigator.msMaxTouchPoints > 0;

	if (!isTouchDevice) return;

	document.addEventListener("DOMContentLoaded", function () {
		const serviceItems = document.querySelectorAll(".service-item");

		serviceItems.forEach(function (item) {
			const img1 = item.querySelector(".img1");
			const img2 = item.querySelector(".img2");

			if (!img1 || !img2) return;

			item.addEventListener(
				"touchstart",
				function (e) {
					// Toggle the 'touched' class - CSS handles the fade transition
					item.classList.toggle("touched");
				},
				{ passive: true },
			);
		});

		// Optional: Reset all items when tapping outside
		document.addEventListener(
			"touchstart",
			function (e) {
				if (!e.target.closest(".service-item")) {
					serviceItems.forEach(function (item) {
						item.classList.remove("touched");
					});
				}
			},
			{ passive: true },
		);
	});
})();
