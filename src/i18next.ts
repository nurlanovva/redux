import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from './translations/ru.json';
import en from './translations/en.json';
import it from './translations/it.json';

const resources = {
    en: {translation: en},
    ru: {translation: ru},
    it: {translation: it}
}

export const currentLang = localStorage.getItem("lang") || "ru"

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: ['ru', 'it'],
        interpolation: {escapeValue: false}
    })

export default i18n