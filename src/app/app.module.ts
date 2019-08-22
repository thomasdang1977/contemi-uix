import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ThemerModule} from './modules/themer/themer.module';
import {MenuModule} from './modules/menu/menu.module';
import {CoreModule} from './modules/core/core.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CoreModule,
        ThemerModule,
        MenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
