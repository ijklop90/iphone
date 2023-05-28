export const wrapOperation = (element, idx, func) => {
    const index = i => element.childNodes.item(i)
    const plus = index(1)
    const minus = index(5)
    func(plus, index(3), idx)
    func(minus, index(3), idx)
}

export const secondCount = () => {
    const amount = document.getElementsByClassName("counts-shop")
    let arr = Array.from(amount)
    return arr;
}



