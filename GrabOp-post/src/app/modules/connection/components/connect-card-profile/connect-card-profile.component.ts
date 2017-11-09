import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material";
// Services
import { ConnectionService } from "../../services/connection.service";
import { AuthenticationService } from "../../../account/services/authentication.service";
import { SidenavService } from "../../../../services/sidenav.service";

@Component({
    selector: 'app-connect-card-profile',
    templateUrl: './connect-card-profile.component.html',
    styleUrls: ['./connect-card-profile.component.css']
})
export class ConnectCardProfileComponent implements OnInit {
    @Input() connection: Models.VOConnection;
    @Input() myConnections: Models.VOConnection[];
    btnConnectValue: string;
    private indexConnection: any;
    user: Models.VOUserExt;
    @ViewChild(MatMenuTrigger) toggleTrigger: MatMenuTrigger;
    rotate = false;

    constructor(private connectionService: ConnectionService,
                private userService: AuthenticationService,
                private sidenavService: SidenavService) {
    }

    ngOnInit() {
        this.validateConnection();
    }

    openTriggerConnection() {
        this.rotate = true;
        this.toggleTrigger.openMenu();
    }

    closeMenuConnection() {
        this.rotate = false;
    }

    private validateConnection() {
        this.indexConnection = -1;
        for (let i in this.myConnections) {
            if (this.connection.connectionId == this.myConnections[i].connectionId) {
                this.indexConnection = i;
                break;
            }
        }
        this.btnConnectValue = 'connect';
        this.checkUser(() => {
            if(this.user.id == this.connection.id) {
                this.btnConnectValue = this.connection.connectionStatus == 1 ? 'request send' : 'connected';
            } else if (this.indexConnection != -1) {
                this.btnConnectValue = this.connection.connectionStatus == 1 ? 'request received' : 'connected';
            }
        });
    }

    private checkUser(cb) {
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

    accept() {
        this.checkUser(() => {
            this.connectionService.confirmConnection(this.myConnections[this.indexConnection].connectionId, true).subscribe(
                respond => {
                    this.btnConnectValue = respond.status === 1 ? this.btnConnectValue : 'connected';
                }
            )
        })
    }

    decline() {
        this.checkUser(() => {
            this.connectionService.deleteConnection(this.myConnections[this.indexConnection].connectionId).subscribe(
                respond => {
                    this.btnConnectValue = respond.status === 1 ? this.btnConnectValue : 'connect';
                }
            )
        })
    }

    setConnection() {
        this.checkUser(() => {

            let me = this;
            this.sidenavService.setConnection(
                this.user.id,
                this.connection.id,
                this.connection.displayName,
                respond => {
                    me.btnConnectValue = respond.status === 1 ? 'connection request sent' : 'connect';
                }
            );
        })
    }

}
