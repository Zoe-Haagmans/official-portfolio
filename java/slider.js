const options = document.querySelectorAll(".option");
let currentIndex = 0;
let slideInterval = null;

// Manual click activation
options.forEach((option, index) => {
    option.addEventListener("click", () => {
        setActive(index);
        resetAutoSlide();
    });

    // Hover activation
    option.addEventListener("mouseenter", () => {
        setActive(index);
        clearInterval(slideInterval); // Pause auto-slide on hover
    });

    option.addEventListener("mouseleave", () => {
        resetAutoSlide(); // Resume auto-slide on leave
    });
});

// Function to activate selected slide
function setActive(index) {
    options.forEach(o => o.classList.remove("active"));
    options[index].classList.add("active");
    currentIndex = index;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % options.length;
    setActive(currentIndex);
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}

// Start auto slide
slideInterval = setInterval(nextSlide, 3000);

// Scroll animation for .fade-in elements
const fadeInElements = document.querySelectorAll('.fade-in');
if (fadeInElements.length > 0) {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}
		});
	}, {
		threshold: 0.1 // Trigger when 10% of the element is visible
	});
	fadeInElements.forEach(element => {
		observer.observe(element);
	});
}





