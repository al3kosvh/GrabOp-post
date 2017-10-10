import {Directive, Input, OnChanges, ElementRef, OnInit, Renderer} from "@angular/core";

@Directive({
    selector: '[my-mat-image]'
    , host: {
        '[class.className]': 'className',
        '[class]': 'classNames',
        '[style.background-image]': "url"
    }
})

export class MatImageDirective implements OnInit {

    @Input("my-mat-image") url: string;
    @Input() shape: string = 'round';
    @Input("size") size: string = '40x40';
    @Input("userClass") userClass: string = '';

    classNames: string;

    constructor(private el: ElementRef, private renderer: Renderer) {
    }

    ngOnInit(): void {
        this.classNames = 's' + this.size + ' ' + this.shape + ' ' + this.userClass;
        console.log(' my-mat-image classNames', this.classNames);
        // this.renderer.setElementStyle(this.el.nativeElement,'bacground-image',this.url);
        // this.renderer.setElementClass(this.el.nativeElement,this.size,false);
        // this.renderer.setElementClass(this.el.nativeElement,this.shape,true);

        // console.log(this.classNames )
    }

}

