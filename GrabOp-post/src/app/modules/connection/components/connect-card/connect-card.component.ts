import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-connect-card',
    templateUrl: './connect-card.component.html',
    styleUrls: ['./connect-card.component.css']
})
export class ConnectCardComponent implements OnInit {
    @Input() tab;

    constructor() {
    }

    ngOnInit() {
    }

}
