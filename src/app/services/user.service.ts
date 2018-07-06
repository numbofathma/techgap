import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
// TODO: Disregard the environment just use the API_URL from DEV environemnt
import {environment} from '../../environments/environment';
import {User} from '../models/user';
import {Observable} from 'rxjs/index';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(protected http: Http) {
    }

    public getUsers(page: number = 1, perPage: number = 3): Observable<User[]> {
        const apiURL = `${environment.API_URL}${this.route()}?page=${page}&per_page=${perPage}`;

        return this.http.get(apiURL).pipe(
            map(res => {
                return res.json().results.map(item => {
                    return new User(
                        item.id,
                        item.first_name,
                        item.last_name,
                        item.avatar
                    );
                });
            })
        );
    }

    public getUser(id: number) {
        // TODO: This should return a single user
    }


    private route() {
        return '/users';
    }
}

