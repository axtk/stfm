export function encodeBase64(x: string): string {
    if (typeof TextDecoder !== 'undefined') {
        let bytes = new TextEncoder().encode(x);

        let binString = Array
            .from(bytes, byte => String.fromCodePoint(byte))
            .join('');

        return btoa(binString);
    }

    if (typeof btoa !== 'undefined')
        return btoa(x);

    if (typeof Buffer !== 'undefined')
        return Buffer.from(x).toString('base64');

    return '';
}
