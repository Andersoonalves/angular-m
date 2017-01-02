import './polyfills.ts';

import { COMPILER_PROVIDERS } from '@angular/compiler';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(COMPILER_PROVIDERS).bootstrapModule(AppModule);
