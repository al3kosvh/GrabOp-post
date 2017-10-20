import { Component, Input, OnInit } from "@angular/core";
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

  constructor(private connectionService: ConnectionService,
              private userService: AuthenticationService,
              private sidenavService: SidenavService) {
  }

  ngOnInit() {
    this.validateConnection();
  }

  private validateConnection() {
    this.btnConnectValue = 'connect';
          for (let i in this.myConnections) {
            if (this.connection.id == this.myConnections[i].id) {
              this.indexConnection = i;
              // TODO what is the state describe in connection_status
              this.btnConnectValue = this.myConnections[i].connection_status === 1 ? 'connection sent' :
                (this.myConnections[i].connection_status === 2 ? 'connection received' : 'connected');
              break;
            }
          }
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
      this.connectionService.confirmConnection(this.user.id, this.connection.id, this.myConnections[this.indexConnection].connection_id, 0, true).subscribe(
        respond => {
          this.btnConnectValue = respond.status === 1 ? this.btnConnectValue : 'connected';
        }
      )
    })
  }

  decline() {
    this.checkUser(() => {
      this.connectionService.confirmConnection(this.user.id, this.connection.id, this.myConnections[this.indexConnection].connection_id, 0, false).subscribe(
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
        this.connection.display_name,
        respond => {
          me.btnConnectValue = respond.status === 1 ? 'connection request sent' : 'connect';
        }
      );
    })
  }

}
