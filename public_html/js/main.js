/*var theMargin;

function changeDetailsTab(visElem) {
	FUTURE: Perhaps there's a way to dynamically populate this instead of an array? Not important now though...
	var tabs = ["content-details-reviews", "content-details-desc", "content-details-spec"],
		xScrollPos = window.pageXOffset,
		yScrollPos = window.pageYOffset,
		i,
		len = tabs.length;
	console.log(xScrollPos, yScrollPos);
	for (i = 0; i < len; i++) {
		document.getElementById(tabs[i]).style.display = "none";
	}
	document.getElementById(visElem).style.display = "block";
	window.scrollTo(xScrollPos, yScrollPos);
	console.log(window.pageXOffset, window.pageYOffset);
}

function calcMargin() {
	var theHead = document.getElementsByTagName("HEADER")[0],
		headStyle = window.getComputedStyle(theHead);
	theMargin = headStyle.getPropertyValue('margin-top');
	console.log("Margin Calculated: " + theMargin);
}*/

/*function toggleNav() {
	var nav = document.getElementById("main-nav"),
		navStyle = window.getComputedStyle(nav),
		isMobile = navStyle.getPropertyValue('position'),
		theHead = document.getElementsByTagName("HEADER")[0],
		headStyle = window.getComputedStyle(theHead),
		headMargin = headStyle.getPropertyValue('margin-top');
	console.log("Values: " + isMobile, headMargin, theMargin);
	if (isMobile === 'relative') {
		console.log("We're relative");
		if (headMargin === "0px") {
			document.getElementsByTagName("HEADER")[0].style.marginTop = theMargin;
			console.log("Closed Menu");
		} else {
			//					var pxPos = theMargin.search("px");
			//					theMargin = theMargin.substr(pxPos - 1);
			document.getElementsByTagName("HEADER")[0].style.marginTop = 0;
			console.log("Opened Menu");
			calcMargin();
		}
	}
}*/

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
