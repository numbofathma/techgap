import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UserCardComponent} from './user-card/user-card.component';
import {UserService} from './services/user.service';

@NgModule({
    declarations: [
        AppComponent,
        UserCardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
