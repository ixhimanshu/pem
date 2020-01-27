import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeRoutingModule } from './home-routing.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [LandingPageComponent, HomeComponent],
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
