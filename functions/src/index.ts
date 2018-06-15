import * as admin from "firebase-admin";

// Import Triggers
import * as triggerHelloWorld from "./triggers/helloWorld";
import * as triggerTodoAdd from "./triggers/todoAdd";

admin.initializeApp();

// Implement Triggers
export const helloWorld = triggerHelloWorld.listener;
export const todoAdd = triggerTodoAdd.listener;
