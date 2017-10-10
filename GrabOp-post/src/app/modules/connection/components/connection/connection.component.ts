import { Component, OnInit } from "@angular/core";
// Services
import { ConnectionService } from "../../services/connection.service";

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

    tab = ['connections', 'received', 'sent'];
    myConnections: Models.VOConnection[];
    message: Models.VOMessage;
    search: string;

    constructor(
        private connectionService: ConnectionService
    ) {
        this.myConnections = [];
    }

    ngOnInit() {
        this.connectionService.getMyConnections().subscribe(res => {
            this.myConnections = res;
        });
    }

    onMessage(msg: Models.VOMessage) {
        this.message = msg;
    }

}
