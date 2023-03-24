let rows = 3;
let cols = 3;
const stepsDiv = document.querySelector('.steps')
const field = document.querySelector('#field')
let steps = 0;

let colors = ['red', 'green', 'blue'];

const setColors = () => {
    return colors[Math.floor(Math.random() * 3)]
}

const getColorIndex = (td) => {
    return colors.indexOf(td.className)
}

const setColor = (index, td) => {
    td.classList.remove(td.className)
    if (index === 2) {
        td.classList.add(colors[0])
    } else {
        td.classList.add(colors[index + 1])
    }
    return td.className
}

const isWin = (td) => {
    const allTd = document.querySelectorAll('td')

    let count = 0

    for (t of allTd) {
        if (td.className === t.className) {
            count++
        }
    }

    if (count === allTd.length) {
        alert(`Ура! Вы заполнили все ячейки за ${steps} ходов`)
    }
}

for (i = 0; i < cols; i++) {

    let tr = document.createElement('tr')

    field.appendChild(tr)

    for (a = 0; a < rows; a++) {

        let td = document.createElement('td')
        tr.appendChild(td)
        td.classList.add(setColors())

        td.addEventListener('click', () => {
            steps++
            stepsDiv.innerHTML = `Ходов: ${steps}`
            setColor(getColorIndex(td), td)

            isWin(td)

        })
    }
}





