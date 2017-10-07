import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../../services/signup.service';

@Component({
    selector: 'app-login-new',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    isIn: boolean;
    isVisible: boolean = true;

    constructor(private router: Router, private signupService: SignUpService) {

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
