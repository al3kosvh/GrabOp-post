import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
// Services
import { ConnectionService } from "../../services/connection.service";
import { AuthenticationService } from "../../../account/services/authentication.service";

@Component({
    selector: 'app-connect-card',
    templateUrl: './connect-card.component.html',
    styleUrls: ['./connect-card.component.css']
})
export class ConnectCardComponent implements OnInit {
    @Input() tab;
    @Input() connection: Models.VOConnection;
    @Input() sidenav;
    @Output() onMessage = new EventEmitter<Models.VOMessage>();
    user: Models.VOUserExt;

    constructor(private connectionService: ConnectionService, private userService: AuthenticationService) {
    }

    ngOnInit() {
    }

    disconnect() {
        this.checkUser(() => {
            this.adminConnection(false)
        }
        )
    }

    accept() {
        this.checkUser(() => {
            this.adminConnection(true)
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

    private adminConnection(accept) {
        this.connectionService.confirmConnection(this.user.id, this.connection.id, this.connection.connection_id, 0, accept)
            .subscribe(
            res => {
                console.log('Respond Connection', res);
            }
            )
    }

    openMessage() {
        this.checkUser(
            () => {
                this.onMessage.emit({
                    id: this.user.id,
                    senderid: this.connection.id
                });
                this.sidenav.open()
            })
    }

}
