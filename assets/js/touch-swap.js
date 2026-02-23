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

	// Flag for CSS to disable hover-based image swap on touch devices
	document.documentElement.classList.add("touch-device");

	document.addEventListener("DOMContentLoaded", function () {
		const serviceItems = document.querySelectorAll(".service-item");

		serviceItems.forEach(function (item) {
			const img1 = item.querySelector(".img1");
			const img2 = item.querySelector(".img2");

			if (!img1 || !img2) return;

			item.addEventListener(
				"touchstart",
				function (e) {
					const isCurrentlyTouched = item.classList.contains("touched");

					// Reset ALL items to img1 (default) first
					serviceItems.forEach(function (otherItem) {
						otherItem.classList.remove("touched");
					});

					// If this item was not already showing img2, activate it
					if (!isCurrentlyTouched) {
						item.classList.add("touched");
					}
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
