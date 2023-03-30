let texts = [];
let count = 0
const notes = document.getElementById('notes')
const save = document.querySelector('#save')
const create = document.querySelector('#create')
let textarea = document.querySelector('.area')

create.addEventListener('click', () => {
    save.dataset.mode = 'create'
    textarea.value = ""
})

notes.addEventListener('click', (e) => {
    let key = e.target.dataset.key

    if (e.target.className === 'close') {
        e.target.parentNode.remove()
    } else {
        console.log(key)
        console.log(e.target.classList)
        textarea.value = texts[key]
        save.dataset.mode = 'update'
        save.dataset.key = key
    }

})

save.addEventListener('click', function () {
    let mode = this.dataset.mode;
    if (mode == 'create') {
        const li = document.createElement('li')
        li.dataset.key = count
        texts.push(textarea.value)
        li.innerHTML = `Запись ${count + 1}
        <span class="close">X</span>`
        count++
        notes.appendChild(li)
    }
    if (mode == 'update') {
        let key = this.dataset.key;
        console.log(key)
        texts[key] = textarea.value
    }
});
