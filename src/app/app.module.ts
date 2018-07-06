import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { PaginationModule } from 'ngx-bootstrap';
import {AppComponent} from './app.component';
import {UserCardComponent} from './user-card/user-card.component';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent,
        UserCardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PaginationModule.forRoot()
    ],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
