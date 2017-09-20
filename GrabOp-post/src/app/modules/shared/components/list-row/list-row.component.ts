/**
 * Created by Vlad on 9/10/2016.
 */
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'list-row',
    templateUrl: './list-row.component.html',
    styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

    @Input() myItem: any;
    size: number = 256;
    title: string;
    total: number;

    constructor() {

    }

    ngOnInit(): void {

    }

    loadServices(): void {

    }

}
