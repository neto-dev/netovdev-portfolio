import { writable, derived } from 'svelte/store';
import en from './translations/en.json';
import es from './translations/es.json';

type Translation = typeof en;

const translations: Record<string, Translation> = {
    en,
    es
};

export const locale = writable('es');
export const locales = Object.keys(translations);

function getTranslation(translations: any, path: string): string {
    const result = path.split('.').reduce((obj, key) => obj?.[key], translations);
    return typeof result === 'string' ? result : path;
}

export const t = derived(locale, ($locale) => {
    return (key: string, vars: Record<string, string> = {}) => {
        let text = getTranslation(translations[$locale], key);
        Object.keys(vars).forEach((v) => {
            const regex = new RegExp(`{{${v}}}`, 'g');
            text = text.replace(regex, vars[v]);
        });
        return text;
    };
});
