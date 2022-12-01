export function pad(x: unknown, length: number, padding = '0'): string {
    return `${padding.repeat(length)}${String(x)}`.slice(-length);
}
