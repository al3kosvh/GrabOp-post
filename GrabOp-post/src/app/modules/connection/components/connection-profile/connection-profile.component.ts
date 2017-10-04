import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
// Services
import { ConnectionService } from "../../services/connection.service";

@Component({
  selector: 'app-connection-profile',
  templateUrl: './connection-profile.component.html',
  styleUrls: ['./connection-profile.component.css']
})
export class ConnectionProfileComponent implements OnInit {
  myConnections: Models.VOConnection[];
  connections: Models.VOConnection[];
  search: string;

  constructor(private route: ActivatedRoute,
              private connectionService: ConnectionService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['id']) {
        this.connectionService.getMyConnections().subscribe(myConnections => {
          this.myConnections = myConnections;
          this.connectionService.getProfileConnections(params['id']).subscribe(
            connections => {
              this.connections = connections;
            }
          )
        });
      }
    });
  }

}
