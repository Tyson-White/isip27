const tabe = document.querySelector('.tabe')
const tableList = []
const btn = document.querySelector('.btn')
const closeCells = []

for (let i = 0; i < 10; i++) {

  let tr = document.createElement('tr')
  tabe.appendChild(tr)
  for (let a = 0; a < 10; a++) {

    let td = document.createElement('td')
    tr.appendChild(td)
    tableList.push(td)
  }

}

class Ship {

  constructor() {

    this.pos = Math.floor(Math.random * 99)
    this.ret = Math.floor(Math.random * 2)
    this.ship = []

  }

  newCurrents() {
    this.pos = Math.floor(Math.random() * 99)
    this.ret = Math.floor(Math.random() * 2)
    this.printShip()
  }

  setPos2() {
    if (this.ret === 1 && this.pos > 10) {
      this.pos2 = this.pos - 10
      return true
    }
    else if (this.ret === 1 && this.pos % 10 === 0) {
      this.pos2 = this.pos + 1
      return true
    } else {
      this.newCurrents()
      return false
    }
  }

  setClose() {
    console.log(this.pos)
    closeCells.push(this.pos + 1)
    closeCells.push(this.pos - 1)
    closeCells.push(this.pos - 11)
    closeCells.push(this.pos - 9)
    closeCells.push(this.pos - 21)
    closeCells.push(this.pos - 20)
    closeCells.push(this.pos - 19)
    closeCells.push(this.pos + 9)
    closeCells.push(this.pos + 10)
    closeCells.push(this.pos + 11)
    console.log(closeCells)

    for (let i = 0; i < closeCells.length; i++) {
      try {
        tableList[closeCells[i]].classList.add('gray')
      } catch {
        
      }
      
    }
  }

  checkCells() {
    for (let i = 0; i < closeCells.length; i++) {
      if (closeCells[i] === this.pos) {
        return true
      }
    }
    return false
  }

  printShip() {

    if (this.checkCells()) {
      this.newCurrents()
    }
    else {
      if (this.setPos2()) {
        tableList[this.pos].classList.add('black')
        tableList[this.pos2].classList.add('black')
        this.setClose()


      }

    }

  }

}

const ships = []



const clearList = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('black')) {
      list[i].classList.remove('black')
    }
  }
}

const clearGray = (list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].classList.contains('gray')) {
      list[i].classList.remove('gray')
    }
  }
}

btn.addEventListener('click', () => {
  closeCells.length = 0
  clearGray(tableList)
  clearList(tableList)
  for (i = 0; i < 3; i++) {
    const ship = new Ship()
    ship.printShip()
    ships.push(ship)
  }
})


