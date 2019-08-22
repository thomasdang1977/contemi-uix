import {Directive, ElementRef, HostListener} from '@angular/core';
const SELECTOR = '[option]';
@Directive({
    selector: SELECTOR
})
export class OptionDirective {

    constructor(private elRef: ElementRef) {
    }

    @HostListener('click', ['$event.target'])
    onClick() {
        // console.log(this.elRef.nativeElement.childNodes);
        this.elRef.nativeElement.insertAdjacentHTML('afterend', '<span>two</span>');
        console.log(this.elRef.nativeElement.classList.add('selected'));
    }
}
