import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { Jhipster4102MonAppModuleNgFactory } from '../../../../build/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(Jhipster4102MonAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
