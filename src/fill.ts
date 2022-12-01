import {escapeRegExp} from './escapeRegExp';

export function fill<T extends Record<string, unknown>>(
    template: string,
    data: T,
    transformMap?: Record<string, (data: T) => unknown>,
): string {
    let s = template;

    for (let [key, value] of Object.entries(data))
        s = s.replace(
            new RegExp(`\\{${escapeRegExp(key)}\\}`, 'g'),
            String(transformMap?.[key] ? transformMap[key](data) : value),
        );

    return s;
}
