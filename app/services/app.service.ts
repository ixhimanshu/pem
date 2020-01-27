import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as platformModule from "tns-core-modules/platform";
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AppService {
    constructor(private httpClient: HttpClient, private router: Router) { }

    width: number;
    height: number;
    isIOS: boolean;
    isAndroid: boolean;

    initialize() {
        this.width = platformModule.screen.mainScreen.widthDIPs;
        this.height = platformModule.screen.mainScreen.heightDIPs;
        this.isIOS =  platformModule.isIOS;
        this.isAndroid = platformModule.isAndroid;

        // console.log(`Running on Android? ${platformModule.isAndroid}`);
        // console.log(`Running on iOS? ${platformModule.isIOS}`);
        // console.log(`device.model ${platformModule.device.model}`); // For example: "Nexus 5" or "iPhone".
        // console.log(`device.deviceType ${platformModule.device.deviceType}`); // "Phone" | "Tablet"
        // console.log(`device.os ${platformModule.device.os}`); // For example: "Android" or "iOS".
        // console.log(`device.osVersion ${platformModule.device.osVersion}`); // For example: 4.4.4(android), 8.1(ios)
        // console.log(`device.sdkVersion ${platformModule.device.sdkVersion}`); //  For example: 19(android), 8.1(ios).
        // console.log(`device.language ${platformModule.device.language}`); // For example "en" or "en-US".
        // console.log(`device.manufacturer ${platformModule.device.manufacturer}`); // For example: "Apple" or "HTC" or "Samsung".
        // console.log(`device.uuid ${platformModule.device.uuid}`); // The unique identification number
        // console.log(`device.region ${platformModule.device.region}`); //  For example "US".

        // console.log(`screen.mainScreen.heightDIPs ${platformModule.screen.mainScreen.heightDIPs}`); // The absolute height of the screen in density independent pixels.
        // console.log(`screen.mainScreen.heightPixels ${platformModule.screen.mainScreen.heightPixels}`); // The absolute height of the screen in pixels.
        // console.log(`screen.mainScreen.scale ${platformModule.screen.mainScreen.scale}`); // The logical density of the display.
        // console.log(`screen.mainScreen.widthDIPs ${platformModule.screen.mainScreen.widthDIPs}`); // The absolute width of the screen in density independent pixels.
        // console.log(`screen.mainScreen.widthPixels ${platformModule.screen.mainScreen.widthPixels}`); // The absolute width of the screen in pixel
    }

    navigate(path) {
        this.router.navigate(path);
    }
    focused(event) {
        let field = event.object;
    }
    blurred(event) {
        let field = event.object;
    }
    getMeasure(height) {
    var heightPercent = (height/812) * 100;
    return Math.floor((heightPercent*this.height)/100);
    }
}