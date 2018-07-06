import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    public loading: boolean = true;
    public data: User[];

    constructor(private userService: UserService) {

    }

    ngOnInit(): void {
        this.userService.getUsers(1, 3).subscribe(
            data => {
                this.loading = false;
                this.data = data;
            },
            error => {
                // TODO: This should be handled appropriate
                console.log(error);
            }
        );
    }
}
