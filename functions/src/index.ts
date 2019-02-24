import * as admin from "firebase-admin";

// Import Triggers
import * as triggerHelloWorld from "./triggers/helloWorld";
import * as triggerTodoAdd from "./triggers/todoAdd";
import * as triggerCardPayment from "./triggers/cardPayment";

admin.initializeApp();

// Implement Triggers
export const helloWorld = triggerHelloWorld.listener;
export const todoAdd = triggerTodoAdd.listener;
export const cardPayment = triggerCardPayment.listener;
