// let ESCAPP_LOCALES = {
//   es:{
//     "i.auth_text":"Introduce las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
//     "i.auth_text_wrong_credentials":"Las credenciales aportadas no son correctas. Debes introducir las credenciales (correo 'usuario@alumnos.upm.es' y contraseña) de tu usuario en la plataforma Escapp. Para que esta autenticación tenga éxito, previamente debes de haberte inscrito con tu usuario a la escape room en la plataforma Escapp.",
//   },
// };
let ESCAPP_LOCALES = {
};


export let GLOBAL_CONFIG = {
  availableLocales:[  "en" ],
  defaultLocale:"es",
  locale: undefined,
  localStorageKey:"ESCAPP_2GENERIC",
  restoreState:"AUTO",
  escapp:{
    //endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"escapp_generic",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:["en"],
      defaultLocale:"en",
      locales:ESCAPP_LOCALES,
    },
    appPuzzleIds:[],
    notifications:false,
    rtc:true,
    forceValidation:false
  },
};