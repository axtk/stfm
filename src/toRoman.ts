const map: [string, number][] = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

export function toRoman(x: number): string {
    if (typeof x !== 'number')
        return '';

    let output = '';

    for (let [r, a] of map) {
        while (x >= a) {
            output += r;
            x -= a;
        }
    }

    return output;
}
