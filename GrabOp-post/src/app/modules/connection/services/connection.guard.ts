import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ConnectionService} from './connection.service';

@Injectable()
export class ConnectionGuard implements CanActivate {

  constructor(private router: Router,
              private connectionService: ConnectionService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.connectionService.validateUrlProfile(route.params.id, this.router);
  }

}
