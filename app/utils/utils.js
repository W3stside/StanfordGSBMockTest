/* eslint react/prop-types: 0 */
export function randNum(min = 0, max = 9) {
    const newMin = Math.ceil(min);
    const newMax = Math.floor(max);
    return Math.floor( Math.random() * (newMax - newMin + 1) + min );
}
