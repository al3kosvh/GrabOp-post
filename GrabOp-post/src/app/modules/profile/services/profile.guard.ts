import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ProfileService} from './profile.service';

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private router: Router,
              private profileService: ProfileService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.profileService.validateUrlProfile(route.params.id, this.router);
  }

}
