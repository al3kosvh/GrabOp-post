
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

    ngOnInit() {
    //    this.sidenavService.getComponent().subscribe(component => {
    //        if (component != null) {
    //            this.viewContainerRef.clear()
    //            const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    //            const ref = this.viewContainerRef.createComponent(factory);
    //            let instance: any = ref.instance;
    //            instance.person = this.sidenavService.data;
    //            ref.changeDetectorRef.detectChanges();
    //        }
    //    })
    }

    onClose() {
        this.sidenav.close();
    }
}
