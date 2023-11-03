import { Component, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-test';
  message: any = null;

  constructor() {
  }

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging,
      { vapidKey: 'BJ72q-FnJgompVOcyPKQfxbiriq3As_cdPEq077oRGz3LTe599oPT1cVHUjfzUbqGsQ5qQfsGJL09ClqsQCG6Nw' }).then(
      (currentToken) => {
        if (currentToken) {
          console.log('Hurraaa!!! we got the token.....');
          console.log(currentToken);
        } else {
          console.log('No registration token available. Request permission to generate one.');
        }
      }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload: any) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }
}
