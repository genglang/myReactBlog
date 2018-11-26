export function sum(a, b) {
    return a + b
}

export function forEach(items, cb) {
    for (let index = 0; index < items.length; index++) {
        cb(items[index])
    }
}

export const bot={
    sayHello(name){
        console.log(`Hello${name}`)
    }
}