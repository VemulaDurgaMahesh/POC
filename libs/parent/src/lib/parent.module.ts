import { NgModule } from '@angular/core';

import { ParentComponent } from './parent.component';
import { ChildModule } from '@ace/child';



@NgModule({
    imports: [ChildModule],
    declarations:[ParentComponent],
    exports:[ParentComponent],
    providers: []
})
export class ParentModule {
}