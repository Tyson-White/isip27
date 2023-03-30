const task1 = document.querySelector('.task1')
const btn = document.querySelector('.btn')
let time = 0

btn.addEventListener('click', () => {
	const w = setInterval(() => {
		time++
		task1.innerHTML = time
	}, 1000)
})

// 2 -------------------------------------------

const task2 = document.querySelector('.task2')
const btn2 = document.querySelector('.btn2')

let time2 = 10

btn2.addEventListener('click', () => {
	const e = setInterval(() => {
		time2--
		task2.innerHTML = time2
		if (time2 === 0) {
			clearInterval(e)
		}
	}, 1000)
})

// 3 --------------------------------------------

setInterval(() => {
	const input = document.querySelector('.input')
	input.value = input.value * input.value
}, 2000);

// 4 --------------------------------------------

const input2 = document.querySelector('.input2')
const task4 = document.querySelector('.task4')
input2.addEventListener('focusout', () => {
	let time3 = input2.value
	if (time3 > 0) {
		setInterval(() => {
			time3--
			task4.innerHTML = time3
		}, 1000)
	}
	
})

// 5 --------------------------------------------------

const btn3 = document.querySelector('.btn3')

btn3.addEventListener('click', () => {
	const input3 = document.querySelector('.input3')
	const task5 = document.querySelector('.task5')
	let time3 = input3.value
	task5.innerHTML = input3.value

	const r = setInterval(() => {
		time3--
		task5.innerHTML = time3

		if (time3 === 0) {
			clearInterval(r)
		}
	}, 1000)
})

// 6 --------------------------------------------------

let time4 = 0

const task6 = document.querySelector('.task6')
const start = document.querySelector('.start')
const stopw = document.querySelector('.stop')



start.addEventListener('click', () => {
	const inter = setInterval(() => {
		time4++
		task6.innerHTML = time4
	}, 1000)
	stopw.addEventListener('click', () => {
		clearInterval(inter)
	})
	
})

// 7 ------------------------------------------------

const task7 = document.querySelector('.task7')

const list = ['red', 'green']

let i = 0

setInterval(() => {
	task7.style.background = list[i]
	i++
	if (i > 1) {
		i = 0
	}
}, 1000)

// 8 -----------------------------------------

const task8 = document.querySelector('.task8')

setInterval(() => {
	const date = new Date()
	task8.innerHTML = date.toLocaleTimeString()
}, 1000)


