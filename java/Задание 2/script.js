list = ['Банан', 'Яблоко', 'Слива']
count = 0
const word = document.querySelector('.word')

setInterval(() => {
  word.innerHTML = list[count];
  count++;
  if (count === list.length) {
    count = 0
  }
}, 2000)