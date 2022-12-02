import {escapeRegExp} from './escapeRegExp';

export type FillTransformMap<K extends string, T> = Record<K, (data: T) => unknown>;

export function fill<K extends string, T extends Record<K, unknown>>(
    template: string,
    data: T,
    transformMap?: FillTransformMap<K, T>,
): string {
    let s = template;

    for (let [key, value] of Object.entries(data) as Array<[K, unknown]>)
        s = s.replace(
            new RegExp(`\\{${escapeRegExp(key)}\\}`, 'g'),
            String(transformMap?.[key] ? transformMap[key](data) : value),
        );

    return s;
}
