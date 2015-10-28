function checkoutStep(currentStep) {
	var tabs = ["#personal-btn", "#shipping-btn", "#billing-btn"],
		details = ["#personal-details", "#shipping-details", "#billing-details"];
	for (i = 0; i < 3; i++) {
		$(details[i]).fadeOut(0);
		$(tabs[i]).removeClass("current");
	}
	$(details[currentStep]).fadeIn(500);
	$(tabs[currentStep]).addClass("current");
}

function shippingBillingSame() {
	console.log("changing billing disabled");
	$('.address-toggled').each(function () {
		$(this).prop('disabled', function (i, v) {
			return !v;
		});
	})
}

$(document).ready(function () {
	$("#shipping-details").css("display", "none");
	$("#billing-details").css("display", "none");
});

function closeLightbox() {
	$(".lightboxContainer").fadeOut(500);
	console.log("close");
}

function openLightbox() {
	$(".lightboxContainer").fadeIn(500);
}
