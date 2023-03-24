for (let i = 0; i <10; i++) {

    let tr = document.createElement('tr')
    document.appendChild(tr)
    for (let a = 0; a < 10; a++) {

        let td = document.createElement('td')
        td.classList.add('table')
        tr.appendChild(td)

    }

}