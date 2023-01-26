import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import translationEN from './configs/translations/locale/en.json';
import translationDE from './configs/translations/locale/de.json';


// the translations
const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;