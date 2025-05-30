import i18n, { type InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend, { type HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import translationsEN from '../assets/locales/en/translations.json';
import translationsJA from '../assets/locales/ja/translations.json';
import { isProduction } from './utils';

export const defaultNS = 'translations';
export const resources = {
  en: { translations: translationsEN },
  ja: { translations: translationsJA },
} as const;

const i18nOptions: InitOptions<HttpBackendOptions> = {
  defaultNS,
  ns: [defaultNS],
  debug: !isProduction,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: isProduction
      ? 'locales/{{lng}//translations.json'
      : '/src/assets/locales/{{lng}}/translations.json',
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init<HttpBackendOptions>(i18nOptions);
