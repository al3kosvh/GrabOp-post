import { Component, OnInit } from '@angular/core';

// Services
import { ConnectionService } from '../../services/connection.service';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
    tab = ['connections', 'received', 'sent'];

    constructor(
        private connectionService: ConnectionService
    ) { }

    ngOnInit() {
        this.connectionService.getMyConnections().subscribe(res => {
            console.log('getMyConnections res', res);
        });
    }

}
