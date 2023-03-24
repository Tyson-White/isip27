const a = document.querySelector('.a')
const b = document.querySelector('.b')
const c = document.querySelector('.c')
const res = document.querySelector('.res')
const btn = document.querySelector('.btn')
const window1 = document.querySelector('.window')
const form = document.querySelector('.form')

function isNumber(word) {
    for (i = 0; i < word.length; i++) {
        if (/^\d$/.test(word[i])) {
            
        } else {
            return false
        }
    }
    return true;
  }

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (a.value === '' || b.value === '' || c.value === '') {
        window1.innerHTML = 'Заполните все поля'
    } else if (isNumber(a.value) && isNumber(b.value)  && isNumber(c.value)) {
        res.value = (Math.floor(a.value) + Math.floor(b.value) + Math.floor(c.value)) / 3
    } else {
        window1.innerHTML = 'Вы можете ввести только число'
    }
})