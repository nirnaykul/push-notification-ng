import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp } from "firebase/app";

initializeApp({
  apiKey: 'AIzaSyBobn6xJfCNUnddQd3suycoPIVPkRyGLnI',
  authDomain: 'emoment-8f7c7.firebaseapp.com',
  projectId: 'emoment-8f7c7',
  storageBucket: 'emoment-8f7c7.appspot.com',
  messagingSenderId: '1050178502646',
  appId: '1:1050178502646:web:38859887ff4e09263791d7',
  measurementId: 'G-S5ZTRWHZHM',
  vapidKey: 'BJ72q-FnJgompVOcyPKQfxbiriq3As_cdPEq077oRGz3LTe599oPT1cVHUjfzUbqGsQ5qQfsGJL09ClqsQCG6Nw'
} as any);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
