import { Component, OnInit } from "@angular/core";
// Services
import { ConnectionService } from "../../services/connection.service";
import { AuthenticationService } from "../../../account/services/authentication.service";

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

    tab = ['connections', 'received', 'sent'];
    myConnections: Models.VOConnection[];
    myConnectionsActive: Models.VOConnection[] = [];
    myConnectionsReceived: Models.VOConnection[] = [];
    myConnectionsSend: Models.VOConnection[] = [];
    search: string;
    user: Models.VOUserExt;
    activeConnectionCount = 0;
    receivedRequestsCount = 0;
    sendRequestsCount = 0;

    constructor(private connectionService: ConnectionService,
    private userService: AuthenticationService) {
        this.myConnections = [];
    }

    ngOnInit() {
        this.userService.getUser().subscribe(
            user => {
                this.user = user;
                this.connectionService.getMyConnections().subscribe(res => {
                    this.myConnections = res;
                    for (let i in this.myConnections) {
                        if (this.myConnections[i].connectionStatus == 2) {
                            this.myConnectionsActive.push(this.myConnections[i]);
                            this.activeConnectionCount++;
                        } else if (this.myConnections[i].connectionStatus == 1) {console.log('this.user.id == this.myConnections[i].id', this.user.id, this.myConnections[i].id)
                            if (this.user.id == this.myConnections[i].id) {
                                this.myConnectionsReceived.push(this.myConnections[i]);
                                this.receivedRequestsCount++;
                            } else {
                                this.myConnectionsSend.push(this.myConnections[i]);
                                this.sendRequestsCount++;
                            }
                        }
                    }
                });
            }
        );
    }

}
