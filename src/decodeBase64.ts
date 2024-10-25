export function decodeBase64(x: string): string {
    if (typeof TextDecoder !== 'undefined') {
        let binString = atob(x);
        let bytes = Uint8Array.from(binString, s => s.codePointAt(0)!);

        return new TextDecoder().decode(bytes);
    }

    if (typeof atob !== 'undefined')
        return atob(x);

    if (typeof Buffer !== 'undefined')
        return Buffer.from(x, 'base64').toString('utf8');

    return '';
}
