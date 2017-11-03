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
                date: '5:18 p.m'
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
            img: 'assets/img/avatar.gif',
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
            {body: 'Yes, why not', date: '5:18 p.m', me: false},
            {body: 'Because...', date: '5:19 p.m', me: false},
            {body: 'And...', date: '5:19 p.m', me: true},
            {body: 'I have to leave, see you latter', date: '5:20 p.m', me: true},
        ]
    };
    writingMessage = {body: '', date: '', me: true};
    search: string;

    constructor() {

    }

    onSendMessage() {
        this.writingMessage.date = this.getFormatDate();
        this.conversation.conversations.push(this.writingMessage);
        this.writingMessage = {body: '', date: '', me: true};
    }

    getFormatDate(format?: string) {
        let date = new Date(), hours = date.getHours(), minutes = date.getMinutes();
        if (format && format == '24') {
            return hours + ':' + minutes + ' h';
        } else if (hours > 12) {
            return (hours - 12) + ':' + minutes + ' p.m';
        } else {
            return hours + ':' + minutes + ' a.m';
        }
    }

    onChangeConversation(contact) {
        this.conversation = {
            userName: contact.name,
                avatar: contact.img,
            conversations: [
            {body: 'Yes, why not', date: '5:18p.m', me: false},
            {body: 'Because...', date: '5:19p.m', me: false},
            {body: 'And...', date: '5:19p.m', me: true},
            {body: contact.lastConversation.body, date: contact.lastConversation.date, me: false},
        ]
        }
    }

    showCloseBtn(index) {
        this.showBtn = index;
    }

    hideCloseBtn() {
        this.showBtn = -1;
    }

    fileCapture(event) {

    }

    imageCapture(event) {

    }

}
