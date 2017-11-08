import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Jhipster4102MonSharedModule } from '../../shared';
import {
    CustomerService,
    CustomerPopupService,
    CustomerComponent,
    CustomerDetailComponent,
    CustomerDialogComponent,
    CustomerPopupComponent,
    CustomerDeletePopupComponent,
    CustomerDeleteDialogComponent,
    customerRoute,
    customerPopupRoute,
    CustomerResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...customerRoute,
    ...customerPopupRoute,
];

@NgModule({
    imports: [
        Jhipster4102MonSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        CustomerComponent,
        CustomerDetailComponent,
        CustomerDialogComponent,
        CustomerDeleteDialogComponent,
        CustomerPopupComponent,
        CustomerDeletePopupComponent,
    ],
    entryComponents: [
        CustomerComponent,
        CustomerDialogComponent,
        CustomerPopupComponent,
        CustomerDeleteDialogComponent,
        CustomerDeletePopupComponent,
    ],
    providers: [
        CustomerService,
        CustomerPopupService,
        CustomerResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster4102MonCustomerModule {}
