import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster4102MonSharedModule } from '../../shared';
import {
    AddressService,
    AddressPopupService,
    AddressComponent,
    AddressDetailComponent,
    AddressDialogComponent,
    AddressPopupComponent,
    AddressDeletePopupComponent,
    AddressDeleteDialogComponent,
    addressRoute,
    addressPopupRoute,
    AddressResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...addressRoute,
    ...addressPopupRoute,
];

@NgModule({
    imports: [
        Jhipster4102MonSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        AddressComponent,
        AddressDetailComponent,
        AddressDialogComponent,
        AddressDeleteDialogComponent,
        AddressPopupComponent,
        AddressDeletePopupComponent,
    ],
    entryComponents: [
        AddressComponent,
        AddressDialogComponent,
        AddressPopupComponent,
        AddressDeleteDialogComponent,
        AddressDeletePopupComponent,
    ],
    providers: [
        AddressService,
        AddressPopupService,
        AddressResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster4102MonAddressModule {}
