import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'profile-progress',
    templateUrl: './profile-progress.component.html',
    styleUrls: ['./profile-progress.component.css']
})
export class ProfileProgressComponent implements OnInit {

    private percent: number = 0;

    constructor() { }

    ngOnInit() {
    }

}
