import './polyfills.browser';
import 'bootstrap';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

export const platformRef = platformBrowserDynamic();

export function main() {
    if (CONFIG.env.NODE_ENV === 'production') enableProdMode();

    platformRef.bootstrapModule(AppModule)
        .catch(err => {
            // tslint:disable-next-line: no-console
            console.error(err);
        });
}

// support async tag or hmr
switch (document.readyState) {
case 'interactive':
case 'complete':
    main();
    break;
case 'loading':
default:
    document.addEventListener('DOMContentLoaded', () => main());
}
