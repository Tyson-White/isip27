
function f(n) {
    if (n != 1) {
        return n * f(n - 1)
    }
    else {
        return 1
    }
}

console.log(`Факториал: ${f(5)}`)

function f2(n) {
    if (n <= 1) {
        return n
    } else {
        return f2(n - 1) + f2(n - 2)
    }
}

console.log(`Число фибоначчи: ${f2(4)}`)

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

const show = (list) => {

    console.log(list.value);

    if (list.next) {
        show(list.next)
    }

}

show(list)

const reverse = (list) => {
    
    if (list.next) {
        reverse(list.next);
    }

    console.log(list.value);
}

reverse(list);