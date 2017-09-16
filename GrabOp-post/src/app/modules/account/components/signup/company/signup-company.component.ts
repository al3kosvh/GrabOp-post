import { Component, OnInit } from '@angular/core';
import { VOUser, VOUserExt } from '../../../models/vouser';


@Component({
    selector: 'signup-company',
    templateUrl: './signup-company.component.html',
    styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent implements OnInit {

    person: VOUserExt = new VOUserExt();
    constructor() { }

    ngOnInit() {

    }

    onSubmit() {

    }

}
