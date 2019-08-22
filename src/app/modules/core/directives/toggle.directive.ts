import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[toggle]'
})
export class ToggleDirective {

    constructor(private el: ElementRef) {
        console.log('testes');
    }
    @Input('toggle') toggleConfig: any;

    @HostListener('click', ['$event.target'])
    onClick() {
        const bodyTag = document.getElementsByTagName(this.toggleConfig.target);

        const hasClass = bodyTag[0].classList.contains(this.toggleConfig.class)
        !hasClass ? bodyTag[0].classList.add(this.toggleConfig.class) : bodyTag[0].classList.remove(this.toggleConfig.class);
    }
}
