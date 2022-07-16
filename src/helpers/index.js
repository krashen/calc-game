export const generatePair = (seed) => {
    let min = 10**(seed-1);
    let max = (10**seed)-1;
    let random1 = Math.round(Math.random() * (max - min) + min);
    let random2 = Math.round(Math.random() * (max - min) + min);
    
    return [random1, random2];
}

export const recursiveIncrease = (t, l, m) => {
    if (l <= 1) return t
    return t + recursiveIncrease(t*m, l-1, m)
}

const moveCursorToEnd = (el, l) => {
    el.type = 'text';
    el.setSelectionRange(l, l);
    el.type = 'number';
}

export const curryingCheckKey = (i, k) => (e) => { if (e.keyCode === k) moveCursorToEnd(i,i.value.length)}