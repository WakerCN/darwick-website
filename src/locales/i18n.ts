/*
 * @Author       : 魏威
 * @Date         : 2025-06-04 14:45
 * @LastEditTime : 2025-06-06 08:40
 * @LastEditors  : StarOne
 * @Description  : 
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';

const resources = {
  en,
  zh
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
