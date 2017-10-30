// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDB47LoL_eLSnGmWr1rafR-JC22Q_P9Ke4",
    authDomain: "booknotes-a7a99.firebaseapp.com",
    databaseURL: "https://booknotes-a7a99.firebaseio.com",
    projectId: "booknotes-a7a99",
    storageBucket: "booknotes-a7a99.appspot.com",
    messagingSenderId: "378017404612"
  }
};
