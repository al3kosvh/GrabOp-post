import { Component, Input, OnInit } from '@angular/core';
import {Model} from "sequelize";


@Component({
    selector: 'app-connect-card',
    templateUrl: './connect-card.component.html',
    styleUrls: ['./connect-card.component.css']
})
export class ConnectCardComponent implements OnInit {
    @Input() tab;
    @Input() connection: Models.VOConnection;

    constructor() {
    }

    ngOnInit() {
    }

}
