/* eslint react/prop-types: 0 */
export function randNum(min = 0, max = 9) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor( Math.random() * (newMax - newMin + 1) + min );
}

export function randNoRepeat(array) {
    let copy = array.slice(0);
    return function() {
        if (copy.length < 1) {
            copy = array.slice(0);
        }
        const index = Math.floor(Math.random() * copy.length);
        const item = copy[index];
        copy.splice(index, 1);
        return item;
    };
}
