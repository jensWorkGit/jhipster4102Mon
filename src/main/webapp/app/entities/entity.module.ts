import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Jhipster4102MonCategoryModule } from './category/category.module';
import { Jhipster4102MonProductModule } from './product/product.module';
import { Jhipster4102MonCustomerModule } from './customer/customer.module';
import { Jhipster4102MonAddressModule } from './address/address.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Jhipster4102MonCategoryModule,
        Jhipster4102MonProductModule,
        Jhipster4102MonCustomerModule,
        Jhipster4102MonAddressModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jhipster4102MonEntityModule {}
