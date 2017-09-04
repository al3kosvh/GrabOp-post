/**
 * Created by Vlad on 12/24/2016.
 */
import {Injectable} from "@angular/core";
import {AuthHttpMy} from "../app-login/auth-http";
import {Http} from "@angular/http";
@Injectable()
export class HomeService{
  constructor(private http:AuthHttpMy, private http2:Http){

  }
  getPosts():any{
    //this.http.get()
  }




}