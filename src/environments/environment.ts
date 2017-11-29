// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCYj3cu66XiuOIXw_u6BTloyn1msHibSOM',
    authDomain: 'start-idea-app.firebaseapp.com',
    databaseURL: 'https://start-idea-app.firebaseio.com',
    projectId: 'start-idea-app',
    storageBucket: '',
    messagingSenderId: '714600155333'
  }
};
