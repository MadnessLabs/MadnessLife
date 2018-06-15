/*
  This is temporarily commented out as the `setupConfig` method has been temporarily removed
*/

import environment from './environment';
// import * as firebase from "firebase";
declare var firebase: any;

firebase.initializeApp(environment.firebase);

// import { setupConfig } from '@ionic/core';

// setupConfig({
// uncomment the following line to force mode to be Material Design
// mode: 'md'
// });
