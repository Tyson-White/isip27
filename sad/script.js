const backBTN = document.querySelector('.back')
const nextBTN = document.querySelector('.next')
const input = document.querySelector('.inp')
const open = document.querySelector('.open')
const checkbox = document.querySelector('.check')
backBTN.addEventListener('click', () => {
	history.back()
})

nextBTN.addEventListener('click', () => {
	history.forward()
})

open.addEventListener('click', () => {
	if (checkbox.checked) {
		window.open(input.value) 
	} else {
		location.replace(input.value)
	}
})
