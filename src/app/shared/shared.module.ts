import { NgModule } from '@angular/core'
import { Card } from './card/card.component';

@NgModule ({
    declarations: [Card],
    exports: [Card] // components que devem ser exportados pelo ShareModule.
})

export class ShareModule {

}