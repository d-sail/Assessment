import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CafeGoodluckComponent } from './cafe-goodluck/cafe-goodluck.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CafeGoodluckService } from './cafe-goodluck/cafe-goodluck.service';
import { RatingModule } from 'ng-starrating';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CafeGoodluckComponent,
    PageNotFoundComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule
    ],
  providers: [CafeGoodluckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
