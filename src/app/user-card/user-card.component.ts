import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from '../models/user';

@Component({
    selector: 'app-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
    @Input() data: User;
}
