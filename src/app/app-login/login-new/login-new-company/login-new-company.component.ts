import { Component, OnInit } from '@angular/core';
import {VOUser, VOUserExt} from '../../vouser';


@Component({
  selector: 'app-login-new-company',
  templateUrl: './login-new-company.component.html',
  styleUrls: ['./login-new-company.component.css']
})
export class LoginNewCompanyComponent implements OnInit {

  person: VOUserExt = new VOUserExt();
  constructor() { }

  ngOnInit() {

  }

  onSubmit(){

  }

}
