import { Component, Input, OnInit } from "@angular/core";
import { MatSidenav } from '@angular/material';

// Services
import { ConnectionService } from "../../../../connection/services/connection.service";

@Component({
    selector: 'app-set-connection',
    templateUrl: './set-connection.component.html',
    styleUrls: ['./set-connection.component.css']
})
export class SetConnectionComponent implements OnInit{

  message: string;
  @Input() sidenav: MatSidenav;
  @Input() userId: number;
  @Input() senderId: number;
  @Input() displayName: number;
  @Input() cb: any;

    constructor(
      private connectionService: ConnectionService
    ) {

    }

    ngOnInit() {

    }

  private setConnection() {
    this.connectionService.setConnection(this.userId, this.senderId, this.message).subscribe(this.cb)
  }

}
