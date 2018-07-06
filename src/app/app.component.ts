import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './models/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public loading = true;
    public data: User[];
    public pagination: {
        page: 0,
        per_page: 0,
        total: 0,
        total_pages: 0
    };

    constructor(private userService: UserService) {
        this.data = [];
    }

    ngOnInit(): void {
        this.getUsers(1, 3);
    }

    public pageChanged(event: any) {
        console.log('pageChanged');
        this.getUsers(event.page, 3);
    }

    protected getUsers(page: number, limit: number) {

        console.log('getUsers');

        this.userService.getUsers(page, limit).subscribe(
            result => {
                const jsonResult = result.json();
                this.data = [];
                jsonResult.data.map(item => {
                    this.data.push(new User(
                        item.id,
                        item.first_name,
                        item.last_name,
                        item.avatar
                    ));
                });

                this.pagination = {
                    page: jsonResult.page,
                    per_page: jsonResult.per_page,
                    total: jsonResult.total,
                    total_pages: jsonResult.total_pages
                };
                this.loading = false;
            },
            error => {
                // TODO: This should be handled appropriate
                console.log(error);
            }
        );
    }
}
