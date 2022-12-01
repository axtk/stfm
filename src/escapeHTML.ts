import {htmlEntityMap} from '../lib/htmlEntityMap';
import {escapeRegExp} from './escapeRegExp';

export function escapeHTML(x: unknown): string {
    let s = String(x);

    if (!x)
        return '';

    for (let [character, htmlEntity] of htmlEntityMap)
        s = s.replace(new RegExp(escapeRegExp(character), 'g'), htmlEntity);

    return s;
}
