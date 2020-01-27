import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  Page, View, getViewById
} from "tns-core-modules/ui/page/page";
import { AppService } from "../services/app.service";
import * as platformModule from "tns-core-modules/platform";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // @ViewChild("homeContainer", {
  //   read: ElementRef,
  //   static: false
  // }) homeContainer: ElementRef;
  width: any;
  height: any;
  BottomNavigationHeight: number;
  

  constructor(private page: Page, private appService: AppService) { 
    this.page.actionBarHidden = true;
  }

  loadHeight(){
    // const BottomNavigationId = <View>getViewById(this.homeContainer.nativeElement, "BottomNavigationId");
    // this.BottomNavigationHeight = BottomNavigationId.getActualSize().height;
    this.width = platformModule.screen.mainScreen.widthDIPs;
    this.height = platformModule.screen.mainScreen.heightDIPs;
    console.log(this.height);
    
  }

  ngOnInit() {
    
  }



}
