const start = document.querySelector('.start')
const timer = document.querySelector('.timer')
const player1 = document.querySelector('.score1')
const player2 = document.querySelector('.score2')
const accept = document.querySelector('.ok')
const input = document.querySelector('.word')
const word = document.querySelector('.show-word')

count = 0
score1 = 0
score2 = 0

var player = 1

var char = 'а'

start.addEventListener('click', () => {
  count = 10
  const time = setInterval(() => {
    count--
    timer.innerHTML = count;   
    if (count === 0) {
      clearInterval(time)
      if (score1 > score2) {
        alert('Игрок 1 победил')
      } else if (score1 < score2) {
        alert('Игрок 2 победил')
      } else {
        alert('Победила дружба')
      }
    }
  }, 1000)
  
  accept.addEventListener('click', () => {
    
    word.innerHTML = input.value;
    if (input.value.at(0) === char) {
      if (player === 1 ) {
        char = input.value.at(-1)
        score1 += input.value.length
        player = 2
        player1.innerHTML = score1
        count = 10
      } else {
        char = input.value.at(-1)
        score2 += input.value.length
        player = 1
        player2.innerHTML = score2
        count = 10
      }
    }
  })
})
