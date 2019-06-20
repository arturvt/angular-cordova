import { Directive, HostListener, ElementRef } from '@angular/core';

const whiteListDomains = ['cnn', 'google'];
@Directive({
    selector: 'a[appExternalUrl]',
})
export class ExternalUrlDirective {
    constructor(private el: ElementRef) {}

    @HostListener('click', ['$event'])
    clicked(event: Event) {
        const url = this.el.nativeElement.href;
        if (!url) {
            return;
        }

        if (whiteListDomains.some((whiteListedDomain) => url.indexOf(whiteListedDomain) > 0)) {
            console.log(`Internal: ${url}`);
            event.preventDefault();
        }
    }
}

