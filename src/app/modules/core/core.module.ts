import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToggleDirective} from './directives/toggle.directive';
import { OptionDirective } from './directives/option.directive';

@NgModule({
    declarations: [ToggleDirective, OptionDirective],
    imports: [
        CommonModule
    ],
    exports: [ToggleDirective, OptionDirective]
})
export class CoreModule {
}
