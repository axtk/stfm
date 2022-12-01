import {htmlEntityMap} from '../lib/htmlEntityMap';
import {escapeRegExp} from './escapeRegExp';

const conversionMap = htmlEntityMap.reverse();

export function unescapeHTML(x: any): string {
    let s = String(x);

    if (!x)
        return '';

    for (let [character, htmlEntity] of conversionMap)
        s = s.replace(new RegExp(escapeRegExp(htmlEntity), 'g'), character);

    return s;
}
