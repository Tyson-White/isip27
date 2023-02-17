let texts = ['1.jpg', '2.jpg', '3.jpg'];
let i = 0;

const slider = document.querySelector('#slider')
slider.innerHTML = `<img src="img/${texts[i]}" alt="сова ${i}"/>`

setInterval(() => {
	i++ 
	slider.innerHTML = `<img src="img/${texts[i]}" alt="сова ${i}"/>`
	if (i >= 2) {
		i = 0
	}
}, 3000)

left.addEventListener('click', function() {
	if (i <= 0) {
		i = 2
		slider.innerHTML = `<img src="img/${texts[i]}" alt="сова ${i}"/>`
	} else {
		i--
		slider.innerHTML = `<img src="img/${texts[i]}" alt="сова ${i}"/>`
	}
});
right.addEventListener('click', function() {
	if (i >= 2) {
		i = 0
		slider.innerHTML = `<img src="img/${texts[i]}" alt="сова ${i}"/>`
	} else {
		i++
		slider.innerHTML = `<img src="img/${texts[i]}" alt="сова ${i}"/>`
	}
});