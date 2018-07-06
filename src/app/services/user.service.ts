import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
// TODO: Disregard the environment just use the API_URL from DEV environemnt
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/index';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(protected http: Http) {
    }

    public getUsers(page: number = 1, perPage: number = 3): Observable {
        const apiURL = `${environment.API_URL}${this.route()}?page=${page}&per_page=${perPage}`;

        return this.http.get(apiURL);
    }

    public getUser(id: number) {
        // TODO: This should return a single user
    }

    private route() {
        return '/users';
    }
}

