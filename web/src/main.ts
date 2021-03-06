import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
/**
 * Hammerjs must be imported for gestures
 */
import 'hammerjs';
if (environment.production) {
  enableProdMode();
}

const onDeviceReady: (() => void) = (): void => {
  console.log('deviceready');
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));
};

document.addEventListener('deviceready', onDeviceReady, false);
