import { Component, Input, OnInit } from "@angular/core";
import { ConnectionService } from "../../services/connection.service";
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'msg-sidenav',
    templateUrl: './message-sidenav.component.html',
    styleUrls: ['./message-sidenav.component.css']
})
export class MessageSideNavComponent implements OnInit {

    @Input() message: Models.VOMessage;
    @Input() sidenav: MatSidenav;
    loading = false;

    constructor(private connectionService: ConnectionService) {
    }

    ngOnInit() {
        if (!this.message) {
            this.message = { id: null, senderid: null, body: '', subject: '' };
        }
    }

    sendMessage() {
        this.loading = true;
        this.connectionService.sendMessage(this.message.id, this.message.senderid, this.message.body, this.message.subject)
            .subscribe(
            res => {
                console.log('Respond Message success', res);
                // add Message success
            },
            err => {
                console.log('Respond Message err: ', err)
            },
            () => {
                this.loading = false;
            }
            )
    }

}
