import { Component, Input, OnInit } from "@angular/core";
// Services
import { ConnectionService } from "../../services/connection.service";
import { AuthenticationService } from "../../../account/services/authentication.service";
import { SidenavService } from "../../../../services/sidenav.service";

@Component({
    selector: 'app-connect-card',
    templateUrl: './connect-card.component.html',
    styleUrls: ['./connect-card.component.css']
})
export class ConnectCardComponent implements OnInit {
    @Input() tab;
    @Input() connection: Models.VOConnection;
    user: Models.VOUserExt;

    constructor(private connectionService: ConnectionService, private userService: AuthenticationService,
                private sidenavService: SidenavService) {
    }

    ngOnInit() {
    }

    disconnect() {
        this.checkUser(() => {
            this.connectionService.deleteConnection(this.connection.connectionId)
                .subscribe(
                    res => {
                        console.log('Respond Connection', res);
                    }
                )
            }
        )
    }

    accept() {
        this.checkUser(() => {
            this.connectionService.confirmConnection(this.connection.connectionId, true)
                .subscribe(
                    res => {
                        console.log('Respond Connection', res);
                    }
                )
            }
        )
    }

    checkUser(cb) {
        if (this.user) {
            cb()
        } else {
            this.userService.getUser().subscribe(
                user => {
                    this.user = user;
                    cb()
                }
            )
        }
    }

    openMessage() {
        this.checkUser(
            () => {
                this.sidenavService.onMessage({
                    id: this.user.id,
                    senderid: this.connection.id,
                    senderName: this.connection.displayName
                });
            })
    }

}
