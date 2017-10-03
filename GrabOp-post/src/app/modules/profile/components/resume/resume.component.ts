import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnChanges {

    @Input() textDocument: string;
    constructor() { }

    ngOnInit() {
    }
    ngOnChanges(changes: any) {
        console.log(changes);
    }

}
