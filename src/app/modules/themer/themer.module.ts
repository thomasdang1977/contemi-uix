import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemerSettingsComponent} from './themer-settings/themer-settings.component';
import {CoreModule} from '../core/core.module';

@NgModule({
    declarations: [ThemerSettingsComponent],
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [ThemerSettingsComponent]
})
export class ThemerModule {
}
