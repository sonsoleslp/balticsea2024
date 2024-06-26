let ESCAPP_LOCALES = {
};


// AfterOpen can be "NOTHING", "SHOW_URL", "SHOW_MESSAGE" or "SHOW_MESSAGE_AND_CONTINUE"

export let GLOBAL_CONFIG = {
  availableLocales:["en"],
  locale: undefined,
  defaultLocale:"en",
  localStorageKey:"DESKTOP_2022",
  mailAppLink: "https://vishubcode.org/webappscode/549/index.html?url=https%3A%2F%2Fging.github.io%2FMalditaER%2FFakemail",
  escapp:{
    // endpoint:"https://escapp.dit.upm.es/api/escapeRooms/306",
    localStorageKey:"ESCAPP_DESKTOP_2022",
    restoreState:"AUTO",
    imagesPath:"assets/images/",
    I18n:{
      availableLocales:[ "en"],
      defaultLocale:"en",
      locales:ESCAPP_LOCALES,
    },
    appPuzzleIds:[6,7],
    notifications:false,
    rtc:true,
    forceValidation:process.env.NODE_ENV=="production",
  },
};
