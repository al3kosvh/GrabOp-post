
import { Component, Input, ViewContainerRef } from '@angular/core';
import { MdSidenav } from '@angular/material';

// Services
import { SidenavService } from '../../services/sidenav.service';

@Component({
    selector: 'sidenav-options',
    templateUrl: './sidenav-options.component.html',
    styleUrls: ['./sidenav-options.component.css']
})
export class SidenavOptionsComponent {

    @Input() sidenav: MdSidenav;

    constructor(
        private sidenavService: SidenavService,        
        private viewContainerRef: ViewContainerRef
    ) {
        this.sidenavService.registerViewContainerRef(this.viewContainerRef);
    }

    ngOnInit() { }

    onClose() {
        this.sidenav.close();
    }
}
