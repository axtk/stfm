export function encodeBase64(x: string): string {
    if (typeof btoa !== 'undefined')
        return btoa(x);

    if (typeof Buffer !== 'undefined')
        return Buffer.from(x).toString('base64');

    return '';
}
