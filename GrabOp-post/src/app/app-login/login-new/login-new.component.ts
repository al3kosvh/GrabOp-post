import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginNewService} from './login-new.service';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {

  isIn:boolean;
  isVisible:boolean = true;

  constructor(private router:Router, private loginNewService:LoginNewService){

  }

  ngOnInit() {

  }

/*  ngAfterViewInit():void{
    setTimeout(()=>{this.isIn= true;},100)

  }*/

 /* removeMe():void{
    this.router.navigate(['./', {outlets: {important: null}}]);
  }


  hideMe():void{
    this.isIn = false;
    setTimeout(()=>this.removeMe(),600)
  }

  onCloseClick():void{
    this.hideMe();
  }
*/

}
