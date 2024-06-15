import*as Utils from"../vendors/Utils.js";import{LOCALES}from"../config/locales.js";let APP_LOCALES,availableLocales,defaultLocale,locale;export function init(e){if(void 0===APP_LOCALES)if(APP_LOCALES=LOCALES,void 0!==e.locales&&(APP_LOCALES=Utils.deepMerge(APP_LOCALES,e.locales)),availableLocales=void 0!==e.availableLocales&&e.availableLocales instanceof Array&&e.availableLocales.length>0?e.availableLocales:["en"],defaultLocale=isValidLocale(e.defaultLocale)?e.defaultLocale:e.availableLocales[0],isValidLocale(e.locale))locale=e.locale;else{let e=getUserLocale();locale=isValidLocale(e)?e:defaultLocale}}export function getLocale(){return locale}function getUserLocale(){let e=readURLparams();if(isValidLocale(e.locale))return e.locale;let l=navigator.language||navigator.userLanguage;return"string"==typeof l&&-1!==l.indexOf("-")&&(l=l.split("-")[0]),isValidLocale(l)?l:void 0}function readURLparams(){let e={};try{let l=window.location;if(void 0===l)return e;let a=l.search;a=a.substr(1,a.length-1);let t=a.split("&");for(let l=0;l<t.length;l++)try{let a=t[l].split("=");"string"==typeof a[1]&&(e[a[0]]=a[1])}catch(e){}}catch(e){}return e}function isValidLocale(e){return"string"==typeof e&&-1!==availableLocales.indexOf(e)}export function getTrans(e,l){return void 0!==APP_LOCALES[locale]&&"string"==typeof APP_LOCALES[locale][e]?getTransWithParams(APP_LOCALES[locale][e],l):locale!==defaultLocale&&void 0!==APP_LOCALES[defaultLocale]&&"string"==typeof APP_LOCALES[defaultLocale][e]?getTransWithParams(APP_LOCALES[defaultLocale][e],l):void 0}function getTransWithParams(e,l){if("object"!=typeof l)return e;for(let a in l){let t="#{"+a+"}";-1!==e.indexOf(t)&&(e=Utils.replaceAll(e,t,l[a]))}return e}