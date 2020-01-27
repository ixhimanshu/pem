import {
  Component,
  OnInit
} from '@angular/core';
import * as TNSInbox from 'nativescript-sms-inbox';
import * as Permissions from "nativescript-permissions";
// import { android } from 'tns-core-modules/application/application';
// import { android } from '@nativescript/core/application/application';
// import * as camera from "nativescript-camera";
import {
  Image
} from "tns-core-modules/ui/image";

declare var android: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  inboxMsg: string;
  android: any;
  constructor() {}

  ngOnInit() {}

  getInboxMessages() {
    TNSInbox.getInboxes({
      max: 10
    }).then((res) => {
      console.log(JSON.stringify(res));
      this.inboxMsg = JSON.stringify(res);
    }, (err) => {
      console.log('Error: ' + err);
    });
  }

  getPermission() {
    Permissions.requestPermission(android.Manifest.permission.READ_SMS)
      .then(() => {
        console.log("Permission Grante!");
        this.getInboxMessages();
        // Code for using network state and camera goes here
      })
      .catch(() => {
        console.log("Permission Denied !");
      });
  }



}