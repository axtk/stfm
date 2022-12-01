export function getRandomString(length = 16): string {
    let s = '';

    while (s.length < length)
        s += Math.random().toString(36).slice(2);

    return s.slice(-length);
}
