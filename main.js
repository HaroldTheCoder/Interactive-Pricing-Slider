// Checkbox function
const checkBox = document.querySelector(".billing-checkbox");
const yearlySpan = document.querySelector(".discount-span");
const span = document.querySelector(".discount-span-2");
checkBox.addEventListener("click", () => {

	if (checkBox.checked) {
		yearlySpan.classList.toggle("active");
        span.classList.toggle("active");

	} else {
		yearlySpan.classList.remove("active");
        span.classList.remove("active");
	}
});

// Slider function
const mySlider = document.getElementById("my-slider");
const sliderValue = document.querySelector(".slider-value");
const priceValue = document.querySelector(".price-value");
const priceMonth = document.querySelector('.price-month');
//Slider Mobile 
const mySliderMob = document.querySelector(".price-slider-mobile");
const sliderValueMob = document.querySelector(".slider-value-mobile");
const priceValueMob = document.querySelector(".price-value-mobile");
const priceMonthMob = document.querySelector(".price-month-mobile");
function slider() {
	valPercent = Math.floor((mySlider.value / mySlider.max) * 100);
	console.log(valPercent)
    switch (valPercent) {
		case (valPercent = 0):
			sliderValue.innerText = "10K Pageviews";
			priceValue.innerText = "$8.00";
			priceMonth.innerText = "/ month";
			break;
		case (valPercent = 25):
			sliderValue.innerText = "50K Pageviews";
			priceValue.innerText = "$12.00";
			priceMonth.innerText = "/ month";
			break;
		case (valPercent = 50):
			sliderValue.innerText = "100K Pageviews";
			priceValue.innerText = "$16.00";
			priceMonth.innerText = "/ month";
			break;
		case (valPercent = 75):
			sliderValue.innerText = "500K Pageviews";
			priceValue.innerText = "$24.00";
			priceMonth.innerText = "/ month";
			break;
		case (valPercent = 100):
			sliderValue.innerText = "1M Pageviews";
			priceValue.innerText = "$36.00";
			priceMonth.innerText = "/ month";
			break;
		default:
			sliderValue.innerText = "10K Pageviews";
			priceValue.innerText = "$8.00";
			priceMonth.innerText = "/ month";
			break;
	}
     mySlider.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${valPercent}%, hsl(224, 65%, 95%)${valPercent}%)`;
    // Mobile slider ccase condition
     valPercentMob = Math.floor((mySliderMob.value / mySliderMob.max) * 100);
	switch (valPercentMob) {
		case (valPercentMob = 0):
			sliderValueMob.innerText = "10K Pageviews";
			priceValueMob.innerText = "$8.00";
			priceMonthMob.innerText = "/ month";
			break;
		case (valPercentMob = 25):
			sliderValueMob.innerText = "50K Pageviews";
			priceValueMob.innerText = "$12";
			priceMonthMob.innerText = "/ month";
			break;
		case (valPercentMob = 50):
			sliderValueMob.innerText = "100K Pageviews";
			priceValueMob.innerText = "$16.00";
			priceMonthMob.innerText = "/ month";
			break;
		case (valPercentMob = 75):
			sliderValueMob.innerText = "500K Pageviews";
			priceValueMob.innerText = "$24.00";
			priceMonthMob.innerText = "/ month";
			break;
		case (valPercentMob = 100):
			sliderValueMob.innerText = "1M Pageviews";
			priceValueMob.innerText = "$36.00";
			priceMonthMob.innerText = "/ month";
			break;
		default:
			sliderValueMob.innerText = "10K Pageviews";
			priceValueMob.innerText = "$8.00";
			priceMonthMob.innerText = "/ month";
			break;
	}
    mySliderMob.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${valPercentMob}%, hsl(224, 65%, 95%)${valPercentMob}%)`;
}
slider();