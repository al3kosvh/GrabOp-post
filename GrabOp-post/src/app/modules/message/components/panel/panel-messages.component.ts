import { Component } from "@angular/core";

@Component({
    selector: 'app-simple-input',
    templateUrl: './panel-messages.component.html',
    styleUrls: ['./panel-messages.component.css']
})

export class PanelMassagesComponent {

    contacts = [
        {
            name: 'Angela P.',
            img: 'assets/img/1x.jpg',
            lastConversation: {
                body: 'I have to leave, see you latter',
                date: '5:18p.m'
            }
        },
        {
            name: 'Logan H.',
            img: 'assets/img/2x.jpg',
            lastConversation: {
                body: 'I have to leave, see you latter',
                date: 'yesterday'
            }
        },
        {
            name: 'Megan F.',
            img: 'assets/img/3x.jpg',
            lastConversation: {
                body: 'I have to leave, see you latter',
                date: 'Friday'
            }
        },
        {
            name: 'Susan D.',
            img: 'assets/img/avatar.png',
            lastConversation: {
                body: 'I have to leave, see you latter',
                date: 'Apr 3, 2017'
            }
        },
    ];
    showBtn: any;
    conversation = {
        userName: 'Angela P.',
        avatar: 'assets/img/1x.jpg',
        conversations: [
            {body: 'Yes, why not', date: '5:18p.m', me: false},
            {body: 'Because...', date: '5:19p.m', me: false},
            {body: 'And...', date: '5:19p.m', me: true},
            {body: 'I have to leave, see you latter', date: '5:20p.m', me: true},
        ]
    };

    constructor() {

    }

    showCloseBtn(index) {
        this.showBtn = index;
    }

    hideCloseBtn() {
        this.showBtn = -1;
    }

    fileCapture(event) {
        this.showBtn = -1;
    }

    imageCapture(event) {
        this.showBtn = -1;
    }


}
